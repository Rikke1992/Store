let initialState = {
  product: [{ id: 0, value: 0, name: "", cateory: "", photo: "" }],
};

const ADD_PRODUCT = "AddProduct";
const DELETE_PRODUCT = "DeleteProduct";
export const authAppMeThunk = () => (dispatch) => {
  /*  let promiseAuth = dispatch(authMeThunk());
 
     promiseAuth.then(() => {
         dispatch(isAuthAPP(true));
     }); */
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      {
        let newState = {
          ...state,
          product: state.product.map((item) => {
            if (item.id === action.id) {
              return { ...item, value: ++item.value };
            } else {
              return item;
            }
          }),
        };
        return newState;
      }
      break;

    case "DELETE_PRODUCT":
      {
        let newState = {
          ...state,
          product: state.product.map((item) => {
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

export const AddProduct = (product) => ({
  type: ADD_PRODUCT,
  product,
});
export const DeleteProduct = (product) => ({
  type: DELETE_PRODUCT,
  product,
});

export default CartReducer;
