export const ProductsCategorySelector = (state) => {
  return state.Products.product;
};

export const onChangeCategorySelector = (state) => {
  return state.Products.onChange;
};
export const ProfileSelectorStatus = (state) => {
  return state.Profile.status;
};
export const ProfileSelectorAutorizedId = (state) => {
  return state.Auth.userID;
};
