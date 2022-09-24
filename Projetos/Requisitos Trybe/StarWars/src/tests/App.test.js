import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Planets from './Planets.test';

describe('Testando o comportamento da API', () => {
  test('Chando a API', () =>  {
    global.fetch = jest.fn(async () => ({
      json: async () => Planets,
    }));
    render(<App />);
    const apiPlanets = 'https://swapi.dev/api/planets';
    const planets = await screen.findByText('Tatooine');

    expect(planets).toBeInTheDocument();
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith(apiPlanets);
  });
});

describe('Testando os Filtros', () => {
  test('Filtros', () => {
    expect(screen.getByTestId('button-filter')).toBeInTheDocument();
    expect(screen.getByTestId('value-filter')).toBeInTheDocument();
    expect(screen.getByTestId('comparison-filter')).toBeInTheDocument();
    expect(screen.getByTestId('name-filter')).toBeInTheDocument();
    expect(screen.getByTestId('column-filter')).toBeInTheDocument();
  });
});
