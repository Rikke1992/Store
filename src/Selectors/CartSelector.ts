import { GlobalStateApp } from "../Redux/ReduxStore";

export const CartProductSelector = (state:GlobalStateApp) => {
  return state.Cart.products;
};
export const CartItemsProductSelector = (state:GlobalStateApp) => {
  return state.Cart;
};

export const DropDownCheckSelector = (state:GlobalStateApp) => {
  return state.Cart.dropDownCart;
};
