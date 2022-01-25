import { GlobalStateApp } from "./../Redux/ReduxStore";
export const ProductsCategorySelector = (state: GlobalStateApp) => {
  return state.Products.product;
};

export const OneProductSelector = (state: GlobalStateApp) => {
  return state.Products.OneProduct;
};

export const CategorytSelector = (state: GlobalStateApp) => {
  return state.Products.category;
};
