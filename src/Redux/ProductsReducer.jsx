let initialState = null;
const GET_STATE_WITH_PRODUCTS = "getStateWithProducts";

export const getStateWithProductsThunk = (array) => {
  return (dispatch) => {
    dispatch(getStateWithProducts(array));
  };
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_WITH_PRODUCTS:
      {
        let newState = { ...state };

        newState = action.product;
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

export default ProductsReducer;
