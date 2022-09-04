import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouterAndRedux from '../renderWithRouterAndRedux';

describe('Verifica os elementos do componente Login', () => {
    it('Email:', () => {
        renderWithRouterAndRedux(<App />);
        const loginEmail = screen.getByTestId(email-input);
        expect(loginEmail).toBeInTheDocument();
    });
    it('Senha:', () => {
        renderWithRouterAndRedux(<App />);
        const loginPassword = screen.getByTestId(password-input);
        expect(loginPassword).toBeInTheDocument();
    });
    it('Entrar:', () => {
        renderWithRouterAndRedux(<App />);
        const loginEntrar = screen.getByRole('button', { name: 'Entrar' });
        expect(loginEntrar).toBeInTheDocument();
        expect(loginEntrar.disabled).toEqual(true);
    });
    it('Verifica se os valores são salvos no estado:', () => {
          const testEmail = 'vitor@vitor.com';
          const testPassword = '1234567';
    
          const initialState = {
            user: { email: testEmail, password: testPassword },
          };
          renderWithRouterAndRedux(<App />, { initialState });

        const loginEmail = screen.getByTestId('email-input');
        const loginPassword = screen.getByTestId('password-input');
        const loginEntrar = screen.getByRole('button', { name: 'Entrar' });

        userEvent.type(loginEmail, testEmail);
        expect(loginEmail.value).toEqual(testEmail);

        userEvent.type(loginPassword, testPassword);
        expect(loginPassword.value).toEqual(testPassword);

        expect(loginEntrar.disabled).toEqual(false);

        userEvent.click(loginEntrar);

        const { user } = store.getState();
        expect(user).toEqual({ email: emailTeste });
    });
});
