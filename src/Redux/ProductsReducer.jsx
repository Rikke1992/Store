let initialState = { product: null, onChange: false, OneProduct: null };
const GET_STATE_WITH_PRODUCTS = "getStateWithProducts";
const GET_ONE_PRODUCT = "getOneProduct";

export const getStateWithProductsThunk = (array) => {
  return (dispatch) => {
    debugger;
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
        debugger;
        console.log("newState>>>>>>" + newState);
        return newState;
      }
      break;

    case GET_ONE_PRODUCT:
      {
        let newState = { ...state };
        newState.OneProduct = action.product;
        console.log("newState>>>>>>" + newState);
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

export default ProductsReducer;
