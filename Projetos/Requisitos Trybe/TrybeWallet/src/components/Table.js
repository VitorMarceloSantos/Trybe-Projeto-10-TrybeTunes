import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Table extends Component {
  render() {
    const { walletState: { expenses } } = this.props;
    return (
      <section className="container-table">
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map(({ id,
              description,
              tag,
              method,
              value,
              exchangeRates,
              currency,
              valueConverted,
            } = this.expenses) => (
              <tr key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{(Number(value)).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{(Number(exchangeRates[currency].ask)).toFixed(2)}</td>
                <td>{valueConverted}</td>
                <th>Real</th>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  walletState: state.wallet,
});

Table.propTypes = {
  walletState: PropTypes.shape({
    expenses: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Table);
