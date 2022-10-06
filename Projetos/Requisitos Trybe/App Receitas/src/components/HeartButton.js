import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function HeartButton({ recipeDetails }) {
  const [heartIcon, setHeartIcon] = useState(false);
  // const { heartIcon, setHeartIcon } = useContext(MyContext);
  const history = useHistory();
  const { pathname } = history.location;
  const addToLocalStorage = () => {
    const getLocalStorage = localStorage.getItem('favoriteRecipes');
    const item = JSON.parse(getLocalStorage);

    setHeartIcon(!heartIcon);
    if (item !== null) {
      const idFromLocalStorage = item[0].id;
      const idNumber = pathname.split('/')[2];

      if (idNumber === idFromLocalStorage) {
        console.log('removi');
        localStorage.removeItem('favoriteRecipes');
      }
    }
    const pathName = pathname.split('/')[1];

    if (pathName === 'meals') {
      const savedItem = {
        id: recipeDetails.idMeal,
        type: 'meal',
        nationality: recipeDetails.strArea,
        category: recipeDetails.strCategory,
        alcoholicOrNot: '',
        name: recipeDetails.strMeal,
        image: recipeDetails.strMealThumb,

      };
      localStorage.setItem('favoriteRecipes', JSON.stringify([savedItem]));
    } else if (pathName === 'drinks') {
      const savedItem = {
        id: recipeDetails.idDrink,
        type: 'drink',
        nationality: '',
        category: recipeDetails.strCategory,
        alcoholicOrNot: recipeDetails.strAlcoholic,
        name: recipeDetails.strDrink,
        image: recipeDetails.strDrinkThumb,

      };
      localStorage.setItem('favoriteRecipes', JSON.stringify([savedItem]));
    }

    // console.log(recipeDetails);
  };

  const blackOrWhite = () => {
    const getLocalStorage = localStorage.getItem('favoriteRecipes');
    const savedItem = JSON.parse(getLocalStorage);
    const idNumber = pathname.split('/')[2];
    console.log(idNumber);
    if (savedItem !== null) {
      const idFromLocalStorage = savedItem[0].id;

      if (idFromLocalStorage === idNumber) {
        console.log('aaaaaa');
        setHeartIcon(true);
      }
    }
  };

  useEffect(() => {
    // console.log(blackOrWhite());
    blackOrWhite();
  }, []);

  return (
    <button type="button" onClick={ addToLocalStorage }>
      <img
        data-testid="favorite-btn"
        src={ heartIcon ? blackHeartIcon : whiteHeartIcon }
        alt=""
      />
    </button>
  );
}

HeartButton.propTypes = {
  recipeDetails: PropTypes.node.isRequired,
};
