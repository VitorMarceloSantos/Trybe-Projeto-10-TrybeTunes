import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

describe('Testa a pagina FavoritesRecipes', () => {
  test('Verifica se os botões all, Meals e Drinks são renderizados na tela', () => {
    renderWithRouter(<FavoriteRecipes />);

    const btnDrinks = screen.getByTestId('filter-by-drink-btn');
    const btnall = screen.getByTestId('filter-by-all-btn');
    const btnmeals = screen.getByTestId('filter-by-meal-btn');

    expect(btnDrinks).toBeInTheDocument();
    expect(btnall).toBeInTheDocument();
    expect(btnmeals).toBeInTheDocument();
  });

  test('Verifica os botões share e favorites', () => {
    renderWithRouter(<FavoriteRecipes />);

    const btnShare = screen.getByTestId('0-horizontal-share-btn');
    const btnFav = screen.getByTestId('0-horizontal-favorite-btn');

    expect(btnShare).toBeInTheDocument();
    expect(btnFav).toBeInTheDocument();
  });
});
