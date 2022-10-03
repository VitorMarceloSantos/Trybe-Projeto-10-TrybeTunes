import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './Context';

function ProviderContext({ children }) {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonDisable, setButtonDisable] = useState(true);
  const [searchBar, setSearchBar] = useState(true);
  const [dataSearch, setDataSearch] = useState({});
  const [dataSearchDrink, setDataSearchDrink] = useState({});
  const [idDetails, setIdDetails] = useState('');

  const contextValue = {
    buttonDisable,
    userEmail,
    password,
    setEmail,
    setPassword,
    setButtonDisable,
    searchBar,
    setSearchBar,
    dataSearch,
    setDataSearch,
    dataSearchDrink,
    setDataSearchDrink,
    idDetails,
    setIdDetails,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProviderContext;
