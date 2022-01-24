type initialStateType = {
  currencyList: Array<string>;
  activCurrency: string;
  indexCurrency: number;
};
type GetCurrencyActionType = { type: typeof GET_CURRENCY; currencyArray: any };
type ChangeCurrencyActionType = { type: typeof CHANGE_CURRENCY; currency: any };
type ActionTypes = GetCurrencyActionType | ChangeCurrencyActionType;
let initialState: initialStateType = {
  currencyList: ["USD", "AUD", "JPY", "RUB"],
  activCurrency: "USD",
  indexCurrency: 0,
};

let GET_CURRENCY: "GetCurrency" = "GetCurrency";
let CHANGE_CURRENCY: "ChangeCurrency" = "ChangeCurrency";

export const ChangeCurrencyThunk = (currency: any) => (dispatch: any) => {
  dispatch(ChangeCurrencyAction(currency));
};
export const GetCurrencyThunk = (currency: any) => (dispatch: any) => {
  dispatch(GetCurrencyAction(currency));
};

const CurrencyReducer = (state = initialState, action: ActionTypes) => {
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

const GetCurrencyAction = (currencyArray: any): GetCurrencyActionType => ({
  type: GET_CURRENCY,
  currencyArray,
});

const ChangeCurrencyAction = (currency: any): ChangeCurrencyActionType => ({
  type: CHANGE_CURRENCY,
  currency,
});
export default CurrencyReducer;
