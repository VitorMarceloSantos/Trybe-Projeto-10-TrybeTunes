import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoryContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categoriesFromAPI = await getCategories();
    this.setState({
      categories: categoriesFromAPI,
    });
  }

  render() {
    const { handleRadioClick } = this.props;
    const { categories } = this.state;
    return (
      <section>
        {categories.map((category) => (
          <label data-testid="category" htmlFor={ category.id } key={ category.id }>
            <input
              type="radio"
              id={ category.id }
              name="categorie"
              onClick={ handleRadioClick }
            />
            {category.name}
          </label>
        ))}
      </section>
    );
  }
}

CategoryContainer.propTypes = {
  handleRadioClick: PropTypes.func.isRequired,
};
