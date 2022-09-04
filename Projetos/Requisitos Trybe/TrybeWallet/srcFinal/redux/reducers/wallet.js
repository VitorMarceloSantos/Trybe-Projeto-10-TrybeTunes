import { act } from "react-dom/test-utils";

export const walletCorrect = 'WALLET_CORRECT';
export const walletExchange = 'WALLET_EXCHANGE';
// export const walletEdit = 'WALLET_EDIT';
const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case walletCorrect:
    return {
      ...state,
      ...action.payload,
    };
  case walletExchange:
    return {
      ...state,
      ...(state.expenses).push(action.payload),
    };
    // case walletEdit:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     ...action.payload,
    //     // ...state.expenses[action.idToEdit] = action.payload,
    //   };
  default:
    return state;
  }
};

export default wallet;
