import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
// import MyContext from '../context/Context';
import ShareProduct from '../components/ShareProduct';

function RecipeInProgress({ match: { params: { id } } }) {
  // const { idDetails } = useContext(MyContext);
  const [mealsRoute, setMealsRoute] = useState(false);
  const [drinksRoute, setDrinksRoute] = useState(false);
  const [mealDetails, setMealDetails] = useState({});
  const [drinkDetails, setDrinkDetails] = useState({});
  const history = useHistory();
  const [itensSelected, setItensSelected] = useState([]);
  let local = [];

  if (JSON.parse(localStorage.getItem('favoriteRecipes')).length !== 0) {
    // console.log(JSON.parse(localStorage.getItem('favoriteRecipes')));
    local = JSON.parse(localStorage.getItem('favoriteRecipes'));
  }
  const verifyChecked = ({ target }) => {
    if (local.length !== 0) {
      return true;
      // return JSON.parse(localStorage.getItem('favoriteRecipes'))
      //   .some((product) => product === target.id);
    }
  };

  useEffect(() => {
    const fetchMenus = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const results = await response.json();
      setMealDetails(results);
      setMealsRoute(true);
    };
    const fetchBebidas = async () => {
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
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
  }, [id]);

  const itemSelected = ({ target }) => {
    if (localStorage.getItem('favoriteRecipes')) {
      localStorage.removeItem('favoriteRecipes');
    }
    if ((itensSelected.every((product) => product !== target.id))
    || itensSelected.length === 0) {
      const arrayTemp = [...itensSelected, target.id];
      setItensSelected(arrayTemp);
      localStorage.setItem('favoriteRecipes', JSON.stringify(arrayTemp));
      // console.log('Local', localStorage.getItem('favoriteRecipes'));
    } else {
      const arrayTemp = [...itensSelected.filter((product) => product !== target.id)];
      setItensSelected(arrayTemp);
      localStorage.setItem('favoriteRecipes', JSON.stringify(arrayTemp));
      // console.log('Local', localStorage.getItem('favoriteRecipes'));
    }
  };

  return (
    <div>
      {/* {((localStorage.getItem('favoriteRecipes').length !== 0)
      && itensSelected.length === 0) && verifyChecked()} */}
      {/* <p>{console.log('Local', Object.keys(localStorage.getItem('favoriteRecipes')).length)}</p> */}
      {/* {((JSON.parse(localStorage.getItem('favoriteRecipes'))).length !== 0 && itensSelected.length === 0 ) && verifyChecked()} */}
      <h2>Recipe in Progress</h2>
      {/* <p>
        {console.log(JSON.parse(localStorage.getItem('favoriteRecipes'))
          .some((product) => product === 'Onion'))}

      </p> */}
      <p>
        {console.log(local)}

      </p>
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
                htmlFor={ mealDetails.meals[0][e2] }
              >
                <input
                  type="checkbox"
                  id={ mealDetails.meals[0][e2] }
                  name="selected-ingredient"
                  onChange={ (e) => itemSelected(e) }
                  checked={ (e) => verifyChecked(e) }
                />
                {mealDetails.meals[0][e2]}
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
                htmlFor={ drinkDetails.drinks[0][e2] }
              >
                <input
                  type="checkbox"
                  id={ drinkDetails.drinks[0][e2] }
                  name="selected-ingredient"
                />
              </label>
              {drinkDetails.drinks[0][e2]}
            </div>
          ))}
        </div>
      ))}
      <button data-testid="finish-recipe-btn" type="button">Finish Recipe</button>
    </div>
  );
}
RecipeInProgress.propTypes = {
  match: PropTypes.func.isRequired,
};

export default RecipeInProgress;
