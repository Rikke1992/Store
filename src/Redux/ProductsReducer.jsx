let initialState = {
  product: null,
  onChange: false,
  OneProduct: null,
  category: null,
};
const GET_STATE_WITH_PRODUCTS = "getStateWithProducts";
const GET_ONE_PRODUCT = "getOneProduct";
const DELETE_CATEGORY = "deleteCategory";

export const getStateWithProductsThunk = (array) => {
  return (dispatch) => {
    dispatch(getStateWithProducts(array));
  };
};
export const getOneProductsThunk = (item) => {
  return (dispatch) => {
    dispatch(getOneProductAction(item));
  };
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_WITH_PRODUCTS:
      {
        let newState = { ...state };
        newState.product = action.product;
        newState.category = newState.product[0].category;

        return newState;
      }
      break;

    case GET_ONE_PRODUCT:
      {
        let newState = { ...state };
        newState.OneProduct = action.product;

        newState.category = newState.OneProduct.category;

        return newState;
      }
      break;
    case DELETE_CATEGORY:
      {
        let newState = { ...state };
        newState.category = null;
        return newState;
      }
      break;

    default: {
      return state;
    }
  }
};
const getStateWithProducts = (product) => {
  return {
    type: GET_STATE_WITH_PRODUCTS,
    product,
  };
};

const getOneProductAction = (product) => {
  return {
    type: GET_ONE_PRODUCT,
    product,
  };
};

export const deleteCategoryAction = () => {
  return {
    type: DELETE_CATEGORY,
  };
};

export default ProductsReducer;
