let initialState = {
  currencyList: ["USD", "AUD", "JPY", "RUB"],
  activCurrency: "USD",
  indexCurrency: 0,
};

let GET_CURRENCY = "GetCurrency";
let CHANGE_CURRENCY = "ChangeCurrency";

export const ChangeCurrencyThunk = (currency) => (dispatch) => {
  debugger;
  dispatch(ChangeCurrencyAction(currency));
};
export const GetCurrencyThunk = (currency) => (dispatch) => {
  debugger;
  dispatch(GetCurrencyAction(currency));
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      {
        let newState = { ...state };
        newState.currencyList = action.currencyArray;
        newState.activCurrency = newState.currencyList[0];
        return newState;
      }
      break;
    case CHANGE_CURRENCY:
      {
        let newState = { ...state };
        newState.activCurrency = action.currency;
        newState.indexCurrency = newState.currencyList.indexOf(action.currency);

        return newState;
      }
      break;

    default: {
      return state;
    }
  }
};

const GetCurrencyAction = (currencyArray) => ({
  type: GET_CURRENCY,
  currencyArray,
});
const ChangeCurrencyAction = (currency) => ({
  type: CHANGE_CURRENCY,
  currency,
});
export default CurrencyReducer;
