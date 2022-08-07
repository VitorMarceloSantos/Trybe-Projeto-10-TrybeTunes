import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../Components/ProductCard';
import { getProductsByName, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryContainer from '../Components/CategoryContainer';
import ButtonCart from '../Components/ButtonCart';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: '',
      productList: [],
      noneProduct: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleSearchClick = async () => {
    const { searchBar } = this.state;

    const productListByName = await getProductsByName(searchBar);

    if (productListByName.results.length === 0) {
      this.setState({
        noneProduct: true,
      });
    } else {
      this.setState({
        productList: productListByName.results,
        noneProduct: false,
      });
    }
  }

  renderproductListOrNone = () => {
    const { handleClickAddCart } = this.props;
    const { productList } = this.state;
    const { match: { path } } = this.props;
    return (productList.length === 0
      ? (
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      ) : (
        <ul>
          {productList
            .map((product) => (<ProductCard
              handleClickAddCart={ handleClickAddCart }
              product={ product }
              key={ product.id }
              path={ path }
            />))}
        </ul>
      )
    );
  }

  handleRadioClick = async ({ target }) => {
    const productsByCategory = await getProductsFromCategoryAndQuery(target.id);

    this.setState({
      productList: productsByCategory.results,
    });
  }

  render() {
    const { searchBar, noneProduct } = this.state;
    return (
      <section>
        <form action="">
          <label htmlFor="searchBar">
            <input
              type="text"
              id="searchBar"
              name="searchBar"
              value={ searchBar }
              onChange={ this.handleChange }
              data-testid="query-input"
            />
          </label>
          <button
            type="button"
            onClick={ this.handleSearchClick }
            data-testid="query-button"
          >
            Pesquisar

          </button>
        </form>
        <div className="container-cart">
          <ButtonCart />
        </div>
        <section>
          {noneProduct
            ? (
              <p data-testid="home-initial-message">
                Nenhum produto foi encontrado
              </p>
            ) : this.renderproductListOrNone() }
        </section>
        <section className="side-bar">
          <CategoryContainer handleRadioClick={ this.handleRadioClick } />
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  handleClickAddCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
