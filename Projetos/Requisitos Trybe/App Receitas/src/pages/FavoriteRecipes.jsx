import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ShareButton from '../components/ShareButton';

const mockRecipe = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  }];

function FavoriteRecipes() {
  return (
    <div>
      <Header title="Favorite Recipes" />
      <button type="button" data-testid="filter-by-all-btn">
        All
      </button>
      <button type="button" data-testid="filter-by-meal-btn">
        Meals
      </button>
      <button type="button" data-testid="filter-by-drink-btn">
        Drinks
      </button>
      {mockRecipe.map((recipe, index) => (
        <div key={ recipe.id }>
          <Link
            to={ recipe.type === 'meal' ? (`/meals/${recipe.id}`)
              : (`/drinks/${recipe.id}`) }
          >
            <img
              src={ recipe.image }
              alt={ `Img-${index}` }
              role="presentation"
              data-testid={ `${index}-horizontal-image` }
              width="300"
              height="300"
            />
          </Link>
          {recipe.alcoholicOrNot && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.alcoholicOrNot}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          {recipe.area && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.area}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          {recipe.nationality && (
            <p data-testid={ `${index}-horizontal-top-text` }>
              {recipe.nationality}
              {' '}
              -
              {' '}
              {recipe.category}
            </p>
          )}
          <Link to={ (`/drinks/${recipe.id}`) }>
            <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
          </Link>
          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
            src={ blackHeartIcon }
          >
            <img
              src={ blackHeartIcon }
              alt="Icone de Favorito"
            />
          </button>
          <ShareButton index={ index } recipe={ recipe } />
        </div>
      ))}
    </div>
  );
}

export default FavoriteRecipes;
