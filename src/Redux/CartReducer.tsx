type ProductsType = {
  id: string;
  value: number;
  name: string;
  cateory: string;
  photo: string;
};
type initialStateType = {
  products: Array<ProductsType>;
  value: number;
  totalPrice: number;
  dropDownCart: boolean;
};
type actionTypes =
  | DropDownCartCheckType
  | MinusAndPlusProductType
  | AddProductType;
type DropDownCartCheckType = {
  type: typeof DROP_DOWN_CART_CHECK;
  value: boolean;
};
type MinusAndPlusProductType = {
  type: typeof MINUS_PRODUCT | typeof PLUS_PRODUCT;
  id: string;
};
type AddProductType = { type: typeof ADD_PRODUCT; product: ProductsType };

let initialState: initialStateType = {
  products: [
    /* { id: 0, value: 0, name: "", cateory: "", photo: "" } */
  ],
  value: 0,
  totalPrice: 0,
  dropDownCart: false,
};

const ADD_PRODUCT: "AddProduct" = "AddProduct";
const PLUS_PRODUCT: "PlusProduct" = "PlusProduct";
const MINUS_PRODUCT: "MinusProduct" = "MinusProduct";
const DROP_DOWN_CART_CHECK: "dropDownCartChek" = "dropDownCartChek";

export const dropDownCartChekThunk = (value: boolean) => {
  return (dispatch: any) => {
    dispatch(DropDownCartCheckDispatch(value));
  };
};
export const AddToCartProductThunk = (product: ProductsType) => {
  return (dispatch: any) => {
    dispatch(AddProductDispatch(product));
  };
};
export const MinusProductThunk = (id: string) => {
  return (dispatch: any) => {
    dispatch(MinusProductDispatch(id));
  };
};
export const PlusProductThunk = (id: string) => {
  return (dispatch: any) => {
    dispatch(PlusProductDispatch(id));
  };
};

const CartReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case ADD_PRODUCT:
      {
        let newState = {
          ...state,
        };
        let someIdentical = newState.products.some(
          (item) => item.id === action.product.id
        );
        if (someIdentical) {
          newState.products = newState.products.map((item) => {
            if (item.id === action.product.id) {
              ++newState.value;
              ++item.value;
              return item;
            } else {
              return item;
            }
          });
        } else {
          ++newState.value;
          newState.products.push({ ...action.product, value: 1 });
        }

        return newState;
      }
      break;
    case MINUS_PRODUCT:
      {
        debugger;
        let newState = {
          ...state,
        };
        newState.products = state.products.map((item) => {
          if (item.id === action.id) {
            --newState.value;
            return { ...item, value: --item.value };
          } else {
            return item;
          }
        });
        newState.products = newState.products.filter((it) => {
          return it.value !== 0;
        });
        return newState;
      }
      break;
    case PLUS_PRODUCT:
      {
        let newState = {
          ...state,
        };
        newState.products = state.products.map((item) => {
          if (item.id === action.id) {
            ++newState.value;
            return { ...item, value: ++item.value };
          } else {
            return item;
          }
        });
        return newState;
      }
      break;
    case DROP_DOWN_CART_CHECK:
      {
        let newState = {
          ...state,
        };
        newState.dropDownCart = action.value;
        return newState;
      }
      break;
    default: {
      return state;
    }
  }
};

const DropDownCartCheckDispatch = (value: boolean): DropDownCartCheckType => {
  return { type: DROP_DOWN_CART_CHECK, value };
};

const MinusProductDispatch = (id: string): MinusAndPlusProductType => {
  return { type: MINUS_PRODUCT, id };
};
const PlusProductDispatch = (id: string): MinusAndPlusProductType => {
  return { type: PLUS_PRODUCT, id };
};
const AddProductDispatch = (product: ProductsType): AddProductType => {
  return { type: ADD_PRODUCT, product };
};

export default CartReducer;
