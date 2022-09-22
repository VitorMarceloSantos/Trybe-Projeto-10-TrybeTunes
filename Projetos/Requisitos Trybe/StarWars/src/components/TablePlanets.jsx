import React, { useContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import informationAPI from '../context/DataContext';
// import Filters from './Filters';
// import FilterOptions from './FilterOptions';

const optionsArray = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

function TablePlanets() {
  const {
    planets,
    fetchAPI,
    planetsFiltered,
    setPlanetsFiltered,
    filterByName,
    setFilterByName,
    setFilterByNumericValues,
  } = useContext(informationAPI);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [optionsValues, setOptionsValues] = useState(optionsArray);

  useEffect(() => {
    fetchAPI();
  }, []); // caso não coloque será um laço infinito

  const verifyFilter = () => {
    if (typeof filterByName.name !== 'undefined') {
      setPlanetsFiltered(planets.filter(({ name }) => name.toLowerCase()
        .includes(filterByName.name)));
    }
  };

  useEffect(() => {
    verifyFilter();
  }, [filterByName]);

  const handleOnChange = ({ target }) => {
    setFilterByName({ name: (target.value).toLowerCase() });
  };

  const verifyFilterOptions = () => {
    const tempPlanet = planetsFiltered.length !== 0 ? planetsFiltered : planets;
    setOptionsValues((prevState) => prevState.filter((option) => option !== column));
    // setOptionsValues(optionsArray.filter((option) => option !== column));
    if (comparison === 'maior que') {
      setPlanetsFiltered(tempPlanet.filter(
        (planet) => Number(planet[column]) > Number(value),
      ));
    }
    if (comparison === 'menor que') {
      setPlanetsFiltered(tempPlanet.filter(
        (planet) => (Number(planet[column]) < Number(value)),
      ));
    }
    if (comparison === 'igual a') {
      setPlanetsFiltered(tempPlanet.filter(
        (planet) => Number(planet[column]) === Number(value),
      ));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFilterByNumericValues((prevState) => [...prevState, ({
      column: column.toLowerCase(),
      comparison: comparison.toLowerCase(),
      value,
    })]);
    verifyFilterOptions();
  };

  // const returnOptions = () => {
  //   if (optionsValues.length !== 0) {
  //     return optionsValues;
  //   }
  //   return optionsArray;
  // };

  return (
    <div>
      {planets.length !== 0 && (
        <div>
          <input
            type="text"
            onChange={ handleOnChange }
            data-testid="name-filter"
          />
          <form>
            <select
              id="column-filter"
              data-testid="column-filter"
              onChange={ (e) => (setColumn(e.target.value)) }
              value={ column }
            >
              {optionsValues
                .map((optionValue) => (
                  <option
                    value={ optionValue }
                    key={ optionValue }
                  >
                    {`${optionValue}`}
                  </option>
                ))}
              {/* <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option> */}
            </select>
            <select
              id="comparison-filter"
              data-testid="comparison-filter"
              onChange={ (e) => (setComparison(e.target.value)) }
              value={ comparison }
            >
              <option value="maior que">maior que</option>
              <option value="menor que">menor que</option>
              <option value="igual a">igual a</option>
            </select>
            <input
              type="number"
              data-testid="value-filter"
              onChange={ (e) => (setValue(e.target.value)) }
              value={ value }
            />
            <input
              type="submit"
              value="Filtrar"
              data-testid="button-filter"
              onClick={ handleSubmit }
            />
          </form>
          <table>
            <thead>
              <tr>
                {(Object.keys(planets[0])).map((head) => <th key={ head }>{head}</th>)}
              </tr>
            </thead>
            <tbody>
              {(planetsFiltered.length !== 0 ? planetsFiltered : planets).map(({
                name,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water: surfaceWater,
                population,
                films,
                created,
                edited,
                url,
              }) => (
                <tr key={ name }>
                  <td>{name}</td>
                  <td>{Number(rotationPeriod)}</td>
                  <td>{Number(orbitalPeriod)}</td>
                  <td>{Number(diameter)}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{Number(surfaceWater)}</td>
                  <td>{population}</td>
                  <td>{films}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Table.propTypes = {}

export default TablePlanets;
