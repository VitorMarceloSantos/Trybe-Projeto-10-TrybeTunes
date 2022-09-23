import React, { useContext, useEffect, useState } from 'react';
import informationAPI from '../context/DataContext';

const optionsArray = [
  'orbital_period', 'diameter', 'rotation_period', 'surface_water', 'population'];

function TablePlanets() {
  const {
    planets,
    fetchAPI,
    planetsFiltered,
    setPlanetsFiltered,
    filterByName,
    setFilterByName,
    setFilterByNumericValues,
    filterByNumericValues,
    order,
    setOrder,
  } = useContext(informationAPI);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [optionsValues, setOptionsValues] = useState(optionsArray);
  const [orderOption, setOrderOption] = useState('');
  const [orderDirection, setOrderDirection] = useState('');

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

  const verifyFilterComponent = (tempPlanet) => {
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

  const verifyFilterOptions = () => {
    const tempPlanet = planetsFiltered.length !== 0 ? planetsFiltered : planets;
    setOptionsValues((prevState) => prevState.filter((option) => option !== column));
    verifyFilterComponent(tempPlanet);
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

  const verifyFilterNew = () => {
    let tempPlanet = planets;
    for (let i = 0; i < filterByNumericValues.length; i += 1) {
      if (filterByNumericValues[i].comparison === 'maior que') {
        tempPlanet = (tempPlanet.filter(
          (planet) => Number(planet[filterByNumericValues[i].column])
          > Number(filterByNumericValues[i].value),
        ));
      }
      if (filterByNumericValues[i].comparison === 'menor que') {
        tempPlanet = (tempPlanet.filter(
          (planet) => Number(planet[filterByNumericValues[i].column])
          < Number(filterByNumericValues[i].value),
        ));
      }
      if (filterByNumericValues[i].comparison === 'igual a') {
        tempPlanet = (tempPlanet.filter(
          (planet) => Number(planet[filterByNumericValues[i].column])
          === Number(filterByNumericValues[i].value),
        ));
      }
    }
    return tempPlanet;
  };

  const removeFilter = (index) => {
    setOptionsValues((prevState) => [...prevState, index.column]);
    setFilterByNumericValues(filterByNumericValues
      .filter((filter) => filter.column !== index.column));
  };

  useEffect(() => {
    if (filterByNumericValues.length === 0) {
      setPlanetsFiltered(planets);
    } else {
      setPlanetsFiltered(verifyFilterNew);
    }
  }, [filterByNumericValues]);

  const removeAllFilters = () => {
    setFilterByNumericValues([]);
    setPlanetsFiltered(planets);
  };

  const buttonOrder = () => {
    setOrder({ order: { column: orderOption, sort: orderDirection } });
  };

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
          <input
            type="button"
            value="Remover Filtros"
            onClick={ removeAllFilters }
            data-testid="button-remove-filters"
          />
          <ol>
            {filterByNumericValues.length !== 0 && (
              filterByNumericValues
                .map((filter, index) => (
                  <div key={ index }>
                    <li data-testid="filter">
                      {Object.values(filter)}
                      <button
                        type="button"
                        onClick={ () => removeFilter(filterByNumericValues[index]) }
                      >
                        Apagar
                      </button>
                    </li>
                  </div>))
            )}
          </ol>
          <label htmlFor="column-sort">
            Ordem:
            <select
              id="column-sort"
              data-testid="column-sort"
              onChange={ (e) => setOrderOption(e.target.value) }
              value={ orderOption }
            >
              <option value="population">population</option>
              <option value="orbital_period">orbital_period</option>
              <option value="diameter">diameter</option>
              <option value="rotation_period">rotation_period</option>
              <option value="surface_water">surface_water</option>
            </select>
          </label>
          <label htmlFor="orderAsc">
            <input
              type="radio"
              name="orderRadio"
              id="orderAsc"
              value="ASC"
              onChange={ (e) => setOrderDirection(e.target.value) }
            />
            Ascendente
          </label>
          <label htmlFor="orderDesc">
            <input
              type="radio"
              name="orderRadio"
              id="orderDesc"
              value="DESC"
              onChange={ (e) => setOrderDirection(e.target.value) }
            />
            Descendente
          </label>
          <input
            type="button"
            value="Ordenar"
            data-testid="column-sort-button"
            onClick={ buttonOrder }
          />
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
                <tr key={ name } data-testid="planet-name">
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
