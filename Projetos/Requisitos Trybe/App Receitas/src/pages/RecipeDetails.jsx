import React, { useEffect, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

import { getDrinkById, getMealById } from '../services/recipesDetails';

function RecipeDetails() {
  const [setRecipe] = useState(null);

  const { pathname } = useLocation();
  const { params } = useRouteMatch();
  const { id } = params;

  const detailsMeals = /^\/meals\/.*/i.test(pathname);
  const detailsDrinks = /^\/drinks\/.*/i.test(pathname);

  useEffect(() => {
    if (detailsDrinks) getDrinkById(id).then(setRecipe);
    else if (detailsMeals) getMealById(id).then(setRecipe);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, detailsDrinks, detailsMeals]);

  return (
    <header>
      {detailsMeals && !detailsDrinks && <span>Meals</span>}
      {detailsDrinks && !detailsMeals && <span>Drinks</span>}
    </header>
  );
}

export default RecipeDetails;
