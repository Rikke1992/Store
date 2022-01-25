import { GlobalStateApp } from "./../Redux/ReduxStore";

export const CurencyList = (state: GlobalStateApp): Array<string> => {
  return state.Сurrency.currencyList;
};

export const CurencyActiv = (state: GlobalStateApp): string => {
  return state.Сurrency.activCurrency;
};

export const indexCurrencyActiv = (state: GlobalStateApp): number => {
  return state.Сurrency.indexCurrency;
};
