import { userCorrect } from '../reducers/user';
import { walletCorrect, walletExchange } from '../reducers/wallet';

export function addUserAction(payload) {
  return {
    type: userCorrect,
    payload,
  };
}

export function addWalletAction(payload) {
  return {
    type: walletCorrect,
    payload,
  };
}

export const exchangeExpensesThunk = (payload) => async (dispatch) => {
  const URL = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(URL);
  const coins = await response.json();
  payload.exchangeRates = coins;

  dispatch({
    type: walletExchange,
    payload,
  });
};
