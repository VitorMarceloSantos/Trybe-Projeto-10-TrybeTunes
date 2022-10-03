import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import ingredietMock from './Mocks/IngredientMock';
import meals52874Mock from './Mocks/Meals52874Mock';

describe('Testando o RecipesProgress', () => {
  test('RecipesProgress', async () => {
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

    const searchTop = screen.getByTestId('search-top-btn');
    expect(searchTop).toBeInTheDocument();
    userEvent.click(searchTop);

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
    expect(pageTitle.textContent).toBe('Meals');

    const inputSearch = screen.getByTestId('search-input');
    const ingredientSearch = screen.getByTestId('ingredient-search-radio');
    const buttonSearch = screen.getByTestId('exec-search-btn');

    // Busca por ingredientes

    global.fetch = jest.fn(async () => ({
      json: async () => ingredietMock,
    }));

    expect(inputSearch).toBeInTheDocument();
    userEvent.type(inputSearch, 'Beef');
    expect(inputSearch).toHaveValue('Beef');

    expect(ingredientSearch).toBeInTheDocument();
    userEvent.click(ingredientSearch);

    userEvent.click(buttonSearch);

    const apiIngredient = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=Beef';

    (ingredietMock.meals).map(({ strMeal }) => async () => {
      const element = await screen.findByText(strMeal);
      expect(element).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(apiIngredient);

    const imgButton = await screen.findByRole('button', { name: /Beef and Mustard Pie/i });
    expect(imgButton).toBeInTheDocument();
    userEvent.click(imgButton);

    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52874');
    });

    const buttonRecipe = screen.getByTestId('start-recipe-btn');
    expect(buttonRecipe).toBeInTheDocument();
    userEvent.click(buttonRecipe);

    global.fetch = jest.fn(async () => ({
      json: async () => meals52874Mock,
    }));

    await waitFor(() => {
      expect(history.location.pathname).toBe('/meals/52874/in-progress');
    });

    const titleRecipes = screen.getByRole('heading', { value: 2, name: /Recipe in Progress/i });
    expect(titleRecipes).toBeInTheDocument();

    // const apiMeals52874 = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874';

    // expect(global.fetch).toHaveBeenCalledTimes(1);
    // expect(global.fetch).toHaveBeenCalledWith(apiMeals52874);

    // const imageRef = screen.getByAltText(/meal-thumbnail/i);
    // expect(imageRef).toHaveAttribute('src', 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg');
  });
});
