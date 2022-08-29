import React, { Component } from 'react';
import PropTypes, { shape } from 'prop-types';
import ProductCard from '../Components/ProductCard';
import { getProductsByName, getProductsFromCategoryAndQuery } from '../services/api';
import NavBarExample from '../BootStrap/NavBar';
import Header from '../Components/Header';
import IndexCategory from '../Components/IndexCategory';
import MethodsPaymetns from '../Components/MethodsPaymetns';
import CarouselBrands from '../BootStrap/Carousel';
import Loading from '../Components/Loading';
import NotFound from '../Components/NotFound';
import '../styles/HomeCss.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: '',
      productList: [],
      noneProduct: false,
      indexView: true,
      isLoading: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

 searchProduct = () => {
   const { searchBar } = this.state;
   this.setState({
     indexView: false,
     isLoading: true,
   }, async () => {
     const productListByName = await getProductsByName(searchBar);
     if (productListByName.results.length === 0) {
       this.setState({
         isLoading: false,
         noneProduct: true,
       });
     } else {
       this.setState({
         isLoading: false,
         productList: productListByName.results,
         noneProduct: false,
       });
     }
   });
 }

  handleChangeCategory = ({ target }) => {
    this.setState({ searchBar: target.classList[3] }, () => {
      this.searchProduct();
    });
  }

  handleSearchClick = () => {
    this.searchProduct();
  }

  handleChangeBrands = ({ target: { name } }) => {
    this.setState({
      searchBar: name,
    }, () => {
      this.searchProduct();
    });
  }

  renderproductListOrNone = () => {
    const { handleClickAddCart } = this.props;
    const { productList } = this.state;
    const { match: { path } } = this.props;
    return (productList.length === 0
      ? (
        <p data-testid="home-initial-message">
          {/* Digite algum termo de pesquisa ou escolha uma categoria. */}
        </p>
      ) : (
        <div className="container-global-cards">
          <ul>
            {productList
              .map((product) => (<ProductCard
                handleClickAddCart={ handleClickAddCart }
                product={ product }
                key={ product.id }
                path={ path }
              />))}
          </ul>
        </div>
      )
    );
  }

  handleRadioClick = async ({ target }) => {
    this.setState({
      searchBar: target.value,
      indexView: false,
      isLoading: true,
    }, async () => {
      const productListByName = await getProductsFromCategoryAndQuery(target.id);
      if (productListByName.results.length === 0) {
        this.setState({
          isLoading: false,
          noneProduct: true,
        });
      } else {
        this.setState({
          isLoading: false,
          productList: productListByName.results,
          noneProduct: false,
        });
      }
    });
  }

  render() {
    const { searchBar, noneProduct, indexView, isLoading } = this.state;
    const { CartItemsList } = this.props;
    return (
      <section>
        <Header
          handleChange={ this.handleChange }
          handleSearchClick={ this.handleSearchClick }
          searchBar={ searchBar }
          CartItemsList={ CartItemsList }
        />
        <NavBarExample
          handleRadioClick={ this.handleRadioClick }
        />
        <section>
          {indexView
            && (
              <div>
                <IndexCategory
                  handleChangeCategory={ this.handleChangeCategory }
                />
                <MethodsPaymetns />
                <CarouselBrands
                  handleChangeBrands={ this.handleChangeBrands }
                />
              </div>
            )}
        </section>
        <section>
          {isLoading && (<Loading />)}
        </section>
        <section>
          {noneProduct
            ? (
              <p data-testid="home-initial-message">
                <NotFound />
              </p>
            ) : this.renderproductListOrNone() }
        </section>
      </section>
    );
  }
}

Home.propTypes = {
  handleClickAddCart: PropTypes.func.isRequired,
  CartItemsList: PropTypes.arrayOf(shape()).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};
