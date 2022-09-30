import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import ingredientDrinkMock from './Mocks/IngredientDrinkMock';
import nullDrinksMock from './Mocks/NullDrinksMock';
import oneDrinkMock from './Mocks/OneDrinkMock';
import nameDrinkMock from './Mocks/NameDrinkMock';
import letterDrinkMock from './Mocks/LetterDrinkMock';

describe('Verifica o componente Footer', () => {
  test('Verifica o Search Drink', async () => {
    const { history } = renderWithRouter(<App />);

    // Tela Login
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const button = screen.getByTestId('login-submit-btn');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();

    userEvent.type(email, 'xablau@xablau.com');
    userEvent.type(password, '12345678');

    expect(button).not.toBeDisabled();

    userEvent.click(button);

    // Search

    const buttonDrink = screen.getByTestId('drinks-bottom-btn');
    expect(buttonDrink).toBeInTheDocument();
    userEvent.click(buttonDrink);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.textContent).toBe('Drinks');

    const searchTop = screen.getByTestId('search-top-btn');
    expect(searchTop).toBeInTheDocument();
    userEvent.click(searchTop);

    const inputSearch = screen.getByTestId('search-input');
    const ingredientSearch = screen.getByTestId('ingredient-search-radio');
    const nameSearch = screen.getByTestId('name-search-radio');
    const firstLetterSearch = screen.getByTestId('first-letter-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');

    // Busca por ingredientes

    global.fetch = jest.fn(async () => ({
      json: async () => ingredientDrinkMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'Gin');
    expect(inputSearch).toHaveValue('Gin');

    expect(ingredientSearch).toBeInTheDocument();
    userEvent.click(ingredientSearch);
    userEvent.click(buttonSearch);

    const apiIngredientDrink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin';

    (ingredientDrinkMock.drinks).map(({ strDrink }) => async () => {
      const element = await screen.findByText(strDrink);
      expect(element).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiIngredientDrink);

    // Busca Null(pelo nome)

    userEvent.clear(inputSearch);

    global.fetch = jest.fn(async () => ({
      json: async () => nullDrinksMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'kkkk');
    expect(inputSearch).toHaveValue('kkkk');

    expect(nameSearch).toBeInTheDocument();
    userEvent.click(nameSearch);
    userEvent.click(buttonSearch);

    const apiNull = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=kkkk';

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiNull);
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Busca por Nome

    userEvent.clear(inputSearch);

    global.fetch = jest.fn(async () => ({
      json: async () => nameDrinkMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'Milk');
    expect(inputSearch).toHaveValue('Milk');

    expect(nameSearch).toBeInTheDocument();
    userEvent.click(nameSearch);
    userEvent.click(buttonSearch);

    const apiNameDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Milk';

    (nameDrinkMock.drinks).map(({ strDrink }) => async () => {
      const el = await screen.findByText(strDrink);
      expect(el).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiNameDrink);

    // Busca por Letra

    userEvent.clear(inputSearch);

    global.fetch = jest.fn(async () => ({
      json: async () => letterDrinkMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'a');
    expect(inputSearch).toHaveValue('a');

    expect(firstLetterSearch).toBeInTheDocument();
    userEvent.click(firstLetterSearch);
    userEvent.click(buttonSearch);

    const apiLetterDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

    (letterDrinkMock.drinks).map(({ strDrink }) => async () => {
      const drink = await screen.findByText(strDrink);
      expect(drink).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiLetterDrink);

    // Testando com duas letras 'aa'
    userEvent.clear(inputSearch);

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'aa');
    expect(inputSearch).toHaveValue('aa');

    expect(firstLetterSearch).toBeInTheDocument();
    userEvent.click(firstLetterSearch);
    userEvent.click(buttonSearch);

    // Testando o windows.alert
    jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Busca com apenas 1 elemento (pelo nome)

    userEvent.clear(inputSearch);

    global.fetch = jest.fn(async () => ({
      json: async () => oneDrinkMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'Aquamarine');
    expect(inputSearch).toHaveValue('Aquamarine');

    expect(nameSearch).toBeInTheDocument();
    userEvent.click(nameSearch);
    userEvent.click(buttonSearch);

    const apiOneDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Aquamarine';

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiOneDrink);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/drinks/178319');
    });
  });
});
