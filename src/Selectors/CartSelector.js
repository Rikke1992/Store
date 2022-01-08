export const CartProductSelector = (state) => {
  return state.Cart.products;
};
export const CartItemsProductSelector = (state) => {
  return state.Cart;
};

export const DropDownCheckSelector = (state) => {
  return state.Cart.dropDownCart;
};
