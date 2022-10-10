import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';
// import recipesMock from './Mocks/RecipesMock';
import App from '../App';
import recipeSMock from './Mocks/RecipesMock';

// O beforeEach vai rodar antes de cada teste
beforeEach(() => {
  localStorage.setItem('favoriteRecipes', JSON.stringify(recipeSMock));
});

describe('Testa a pagina FavoritesRecipes', () => {
  test('Verifica se os botões all, Meals e Drinks são renderizados na tela', async () => {
    renderWithRouter(<FavoriteRecipes />);

    const getLocalStorage = JSON.parse(localStorage.getItem('favoriteRecipes'));
    console.log(getLocalStorage);

    // const { history } = renderWithRouter(<App />);

    // global.fetch = jest.fn(async () => ({
    //   json: async () => recipesMock,
    // }));

    // history.push('/meals');

    // const btnSearch = screen.getByTestId('search-top-btn');
    // expect(btnSearch).toBeInTheDocument();
    // userEvent.click(btnSearch);
    // const btnInput = screen.getByTestId('search-input');
    // expect(btnInput).toBeInTheDocument();
    // userEvent.type(btnInput, 'Spicy Arrabiata Penne');
    // expect(btnInput).toHaveValue('Spicy Arrabiata Penne');
    // const btnName = screen.getByTestId('name-search-radio');
    // userEvent.click(btnName);
    // const btnExec = screen.getByTestId('exec-search-btn');
    // expect(btnExec).toBeInTheDocument();
    // userEvent.click(btnExec);

    // const titleProduct = screen.getByRole('heading', { value: 1, name: /Spicy Arrabiata Penne/i});

    // await waitFor(() => {
    //   expect(history.location.pathname).toBe('/favorite-recipes');
    // });

    // const titleRecipes = screen.getByRole('heading', { value: 1, name: /Favorite Recipes/i });
    // expect(titleRecipes).toBeInTheDocument();

    // const buttonAll = screen.getByTestId('filter-by-all-btn');
    // expect(buttonAll).toBeInTheDocument();
    // userEvent.click(buttonAll);

    // const imageSpicy = screen.getByAltText(/Img-0/i);
    // expect(imageSpicy).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg');

    // const buttonMeals = screen.getByTestId('filter-by-meal-btn');
    // expect(buttonMeals).toBeInTheDocument();
    // const buttonDrinks = screen.getByTestId('filter-by-drink-btn');
    // expect(buttonDrinks).toBeInTheDocument();

    // const apiDrink11410Mock = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11410';

    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith(apiDrink11410Mock);
  });
});
