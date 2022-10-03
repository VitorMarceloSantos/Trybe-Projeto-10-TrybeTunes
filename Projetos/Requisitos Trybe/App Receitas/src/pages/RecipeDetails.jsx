import React, { useEffect, useState } from 'react';
/* import { useLocation, useRouteMatch } from 'react-router-dom'; */
import { useHistory } from 'react-router-dom';
import fetchIdRecipes from '../services/fetchDetails25';
import DetailsDrinks from '../components/DetailsDrink';
import DetailsMeals from '../components/DetailsMeals';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import '../styles/Details.css';

function RecipeDetails() {
  const [recipeDetails,
    setRecipeDetails] = useState([]);
  const history = useHistory();
  const { pathname } = history.location;

  useEffect(
    () => fetchIdRecipes(history, setRecipeDetails),
    [history],
  );
  return (
    <body>
      {pathname.split('/')[1] === 'meals'
        ? DetailsMeals(recipeDetails)
        : DetailsDrinks(recipeDetails) }

      <div>
        <button type="button">
          <img
            data-testid="favorite-btn"
            src={ whiteHeartIcon }
            alt=""
          />
        </button>

        <button type="button">
          <img
            data-testid="share-btn"
            src={ shareIcon }
            alt=""
          />
        </button>

      </div>

    </body>
  );
}

export default RecipeDetails;
