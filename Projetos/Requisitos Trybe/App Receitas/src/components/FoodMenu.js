import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/Context';
import Recipes from './Recipes';

function Cardapio() {
  const { dataSearch } = useContext(MyContext);
  const [fetchData, setFetchData] = useState({});
  // const maximumLine = 12;
  useEffect(() => {
    const apiRequest = async () => {
      const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      const response = await fetch(URL);
      const data = await response.json();
      setFetchData(data);
    };
    apiRequest();
  }, []);

  const lenghtArray = (array) => {
    const magicNumber = 12;
    if ((array.meals).length > magicNumber) {
      return (array.meals).slice(0, magicNumber);
    }
    return (array.meals).slice(0, array.meals.length);
  };

  return (
    <div>
      <h2>Cardápio de comida</h2>
      <ul>
        {(Object.keys(dataSearch).length === 0
        && Object.keys(fetchData).length !== 0) && (
          (lenghtArray(fetchData)).map((food, index) => (
            <Recipes
              key={ food.idMeal }
              imageSrc={ food.strMealThumb }
              index={ index }
              name={ food.strMeal }
            />
          ))
        )}
        {Object.keys(dataSearch).length !== 0 && (
          (lenghtArray(dataSearch)).map((food, i) => (
            <Recipes
              key={ food.idMeal }
              imageSrc={ food.strMealThumb }
              index={ i }
              name={ food.strMeal }
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default Cardapio;
