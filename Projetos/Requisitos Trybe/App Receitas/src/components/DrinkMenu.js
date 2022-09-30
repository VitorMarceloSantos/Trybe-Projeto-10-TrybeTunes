import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';
import Recipes from './Recipes';

function DrinkMenu() {
  const { dataSearchDrink } = useContext(MyContext);
  const [fetchDataDrinks, setFetchDataDrinks] = useState({});
  // const maximumLine = 12;
  useEffect(() => {
    const apiRequest = async () => {
      const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const data = await response.json();
      setFetchDataDrinks(data);
    };
    apiRequest();
  }, []);

  const lenghtArray = (array) => {
    const magicNumber = 12;
    if ((array.drinks).length > magicNumber) {
      return (array.drinks).slice(0, magicNumber);
    }
    return (array.drinks).slice(0, array.drinks.length);
  };

  return (
    <div>
      <h2>Cardápio de drink</h2>
      <ul>
        {(Object.keys(dataSearchDrink).length === 0
        && Object.keys(fetchDataDrinks).length !== 0) && (
          // repetionFunction(fetchDataDrinks)
          (lenghtArray(fetchDataDrinks)).map((drink, index) => (
            <Recipes
              key={ drink.idDrink }
              imageSrc={ drink.strDrinkThumb }
              index={ index }
              name={ drink.strDrink }
            />
          ))
        )}
        {Object.keys(dataSearchDrink).length !== 0 && (
          // repetionFunction(dataSearchDrink)
          (lenghtArray(dataSearchDrink)).map((drink, i) => (
            <Recipes
              key={ drink.idDrink }
              imageSrc={ drink.strDrinkThumb }
              index={ i }
              name={ drink.strDrink }
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default DrinkMenu;
