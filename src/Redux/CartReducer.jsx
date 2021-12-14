let initialState = {
  products: [
    /* { id: 0, value: 0, name: "", cateory: "", photo: "" } */
  ],
  value: 0,
};

const ADD_PRODUCT = "AddProduct";
const DELETE_PRODUCT = "DeleteProduct";

export const AddToCartProductThunk = (product) => {
  return (dispatch) => {
    debugger;
    dispatch(AddProductDispatch(product));
  };
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      {
        debugger;
        let newState = {
          ...state,
        };
        debugger;
        let someIdentical = newState.products.some(
          (item) => item.id == action.product.id
        );
        if (someIdentical) {
          debugger;
          newState.products = newState.products.map((item) => {
            if (item.id === action.product.id) {
              debugger;
              ++newState.value;
              ++item.value;
              return item;
            } else {
              debugger;
              return item;
            }
          });
        } else {
          debugger;
          ++newState.value;
          newState.products.push({ ...action.product, value: 1 });
          debugger;
        }

        debugger;
        return newState;
      }
      break;

    case DELETE_PRODUCT:
      {
        let newState = {
          ...state,
          products: state.product.map((item) => {
            if (item.id === action.id) {
              return { ...item, value: --item.value };
            } else {
              return item;
            }
          }),
        };
        return newState;
      }
      break;
    default: {
      return state;
    }
  }
};

const AddProductDispatch = (product) => {
  return { type: ADD_PRODUCT, product };
};
const DeleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

export default CartReducer;
