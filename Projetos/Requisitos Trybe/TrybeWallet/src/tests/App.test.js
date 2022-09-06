import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';
import mockData from './helpers/mockData';

describe('Verifica os elementos do componente Login', () => {
  it('Email:', () => {
    renderWithRouterAndRedux(<App />);
    const loginEmail = screen.getByTestId('email-input');
    expect(loginEmail).toHaveAttribute('type', 'email');
    expect(loginEmail).toBeInTheDocument();
  });
  it('Senha:', () => {
    renderWithRouterAndRedux(<App />);
    const loginPassword = screen.getByTestId('password-input');
    expect(loginPassword).toHaveAttribute('type', 'password');
    expect(loginPassword).toBeInTheDocument();
  });
  it('Entrar:', () => {
    renderWithRouterAndRedux(<App />);
    const loginEntrar = screen.getByRole('button', { name: 'Entrar' });
    expect(loginEntrar).toBeInTheDocument();
    expect(loginEntrar).toHaveAttribute('type', 'submit');
    expect(loginEntrar.disabled).toEqual(true);
  });
  it('Verifica se os valores são iguais, botão Entrar habilitado e mudança de rota:', () => {
    const testEmail = 'vitor@vitor.com';
    const testPassword = '1234567';

    renderWithRouterAndRedux(<App />);

    const emailInput = 'email-input';
    const passwordInput = 'password-input';
    const loginEmail = screen.getByTestId(emailInput);
    const loginPassword = screen.getByTestId(passwordInput);
    const loginEntrar = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(loginEmail, testEmail);
    expect(loginEmail.value).toEqual(testEmail);

    userEvent.type(loginPassword, testPassword);
    expect(loginPassword.value).toEqual(testPassword);

    expect(loginEntrar.disabled).toEqual(false);

    userEvent.click(loginEntrar);
  });
  it('Verifica o botão Entrar está desabilitado com o valores incorretos:', () => {
    renderWithRouterAndRedux(<App />);

    const loginEmail = screen.getByTestId('email-input');
    const loginPassword = screen.getByTestId('password-input');
    const loginEntrar = screen.getByRole('button', { name: 'Entrar' });

    userEvent.type(loginEmail, 'email@incorreto.com');
    userEvent.type(loginPassword, '987');

    expect(loginEntrar).toHaveAttribute('disabled');
  });
});
describe('Testa os valores do componente Wallet:', () => {
  it('', () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(history.location.pathname).toBe('/carteira');
    const table = screen.getByRole('table');
    const value = screen.getByTestId('total-field');
    const loginEmail = screen.getByTestId('email-field');
    expect(loginEmail.textContent).toEqual('Email:');
    expect(value.textContent).toEqual('0.00');
    expect(table).toBeInTheDocument();
  });
  it('Adicionando valores:', async () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    expect(history.location.pathname).toBe('/carteira');

    userEvent.type(screen.getByTestId('value-input'), '5');
    expect(screen.getByTestId('value-input')).toHaveValue(5);

    // const coin = screen.getAllByTestId('currency-input');
    // coin.textContent = 'USD';
    // expect(coin.textContent).toEqual('USD');
    // const addExpenses = screen.getByRole('button', { type: 'submit' });
    const addButton = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(addButton);
    // const value = screen.getByTestId('total-field');
    // userEvent.type(screen.getByTestId('total-field'), '0.00');
    expect(screen.getByTestId('total-field').textContent).toEqual('0.00');
  });
  it('Verifica a adição de despesa e edição da despesa', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const { history } = renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inpValue = screen.getByTestId(/value-input/i);
    const inpDescription = screen.getByTestId(/description-input/i);
    const inpCurrency = screen.getByTestId(/currency-input/i);
    const inpMethod = screen.getByTestId(/method-input/i);
    const inpButton = screen.getByRole('button', { name: /adicionar despesa/i });

    userEvent.type(inpValue, '20.00');
    userEvent.type(inpDescription, 'Cinema');
    await waitFor(() => {
      userEvent.selectOptions(inpCurrency, ['BTC']);
    });
    userEvent.selectOptions(inpMethod, ['Dinheiro']);
    userEvent.click(inpButton);

    const descriptionAsync = await screen.findByRole('cell', { name: /Cinema/i });
    const valueAsync = await screen.findByRole('cell', { name: '20.00' });
    const currencyAsync = await screen.findByRole('cell', { name: /bitcoin/i });
    const methodAsync = await screen.findByRole('cell', { name: /dinheiro/i });

    expect(history.location.pathname).toBe('/carteira');
    expect(descriptionAsync).toBeInTheDocument();
    expect(valueAsync).toBeInTheDocument();
    expect(currencyAsync).toBeInTheDocument();
    expect(methodAsync).toBeInTheDocument();

    const editButton = await screen.findByTestId(/edit-btn/i);
    expect(editButton).toBeInTheDocument();
    // userEvent.click(editButton);

    const deleteButton = await screen.findByTestId(/delete-btn/i);
    expect(deleteButton).toBeInTheDocument();
  });
});
