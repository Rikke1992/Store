let initialState = {
  currencyList: ["USD", "AUD", "JPY", "RUB"],
  activCurrency: "USD",
};

export const authAppMeThunk = () => (dispatch) => {
  /*  let promiseAuth = dispatch(authMeThunk());

    promiseAuth.then(() => {
        dispatch(isAuthAPP(true));
    }); */
};

const CurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "___":
      {
        let newState = { ...state };

        return newState;
      }
      break;

    default: {
      return state;
    }
  }
};

export const ___ = (__) => ({
  type: "isAuthAPP",
  __,
});

export default CurrencyReducer;
