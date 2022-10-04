import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import MyContext from '../context/Context';
import ShareProduct from '../components/ShareProduct';

function RecipeInProgress() {
  const { idDetails } = useContext(MyContext);
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  const [mealDetails, setMealDetails] = useState({});
  const [drinkDetails, setDrinkDetails] = useState({});
  const history = useHistory();

  console.log('Fetch', idDetails);
  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDetails}`);
      const results = await response.json();
      setMealDetails(results);
      setMealsRoute(true);
    };
    const fetchBebidas = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDetails}`);
      const results = await response.json();
      setDrinkDetails(results);
      setDrinksRoute(true);
    };
    if (history.location.pathname.includes('/meals')) {
      fetchMenus();
    }
    if (history.location.pathname.includes('/drinks')) {
      fetchBebidas();
    }
    // eslint-disable-next-line
  }, [idDetails]);
  return (
    <div>
      <h2>Recipe in Progress</h2>
      {mealsRoute
      && mealDetails.meals.map((elem, index) => (
        <div key={ index }>
          <img
            alt="meal-thumbnail"
            src={ elem.strMealThumb }
            width="330"
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-title">{ elem.strMeal }</p>
          <ShareProduct />
          {/* <button data-testid="share-btn" type="button">Share</button> */}
          <button data-testid="favorite-btn" type="button">Favorite</button>
          <p data-testid="recipe-category">{ elem.strCategory }</p>
          <p data-testid="instructions">{ elem.strInstructions }</p>
          {Object.keys(mealDetails.meals[0])
            .filter((e) => e.includes('strIngredient'))
            .map((e2, i) => mealDetails.meals[0][e2]
          && (
            <div key={ i }>
              <label
                data-testid={ `${i}-ingredient-step` }
                htmlFor="index"
              >
                {mealDetails.meals[0][e2]}
                <input type="checkbox" id="index" />
              </label>
            </div>
          ))}
        </div>
      ))}
      {drinksRoute
      && drinkDetails.drinks.map((elem, index) => (
        <div key={ index }>
          <img
            alt="meal-thumbnail"
            src={ elem.strDrinkThumb }
            width="330"
            data-testid="recipe-photo"
          />
          <p data-testid="recipe-title">{ elem.strDrink }</p>
          <ShareProduct />
          <button data-testid="favorite-btn" type="button">Favorite</button>
          <p data-testid="recipe-category">{ elem.strCategory }</p>
          <p data-testid="instructions">{ elem.strInstructions }</p>
          {Object.keys(drinkDetails.drinks[0])
            .filter((e) => e.includes('strIngredient'))
            .map((e2, i) => drinkDetails.drinks[0][e2]
          && (
            <div key={ i }>
              <label
                data-testid={ `${i}-ingredient-step` }
                htmlFor="index"
              >
                {drinkDetails.drinks[0][e2]}
                <input type="checkbox" id="index" />
              </label>
            </div>
          ))}
        </div>
      ))}
      <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
    </div>
  );
}

export default RecipeInProgress;
