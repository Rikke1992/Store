type initialStateType = {
  product: productType | null;
  onChange: Boolean;
  OneProduct: null | OneProdectType;
  category: string | null;
};
type OneProdectType = {
  attributes: any;
  brand: string;
  category: string;
  description: string;
  gallery: Array<string>;
  id: string;
  inStock: Boolean;
  name: string;
  prices: Array<Object>;
  __typename: string;
};
type AllActionType =
  | getStateWithProductsType
  | getOneProductActionType
  | deleteCategoryActionType;
type getStateWithProductsType = {
  type: typeof GET_STATE_WITH_PRODUCTS;
  product: productType;
};

type productType = Array<ObjectProducts>;

type ObjectProducts = {
  attributes: any;
  brand: string;
  category: string;
  description: string;
  gallery: Array<string>;
  id: string;
  inStock: boolean;
  name: string;
};
type getOneProductActionType = {
  type: typeof GET_ONE_PRODUCT;
  product: OneProdectType;
};
type deleteCategoryActionType = { type: typeof DELETE_CATEGORY };

let initialState: initialStateType = {
  product: null,
  onChange: false,
  OneProduct: null,
  category: null,
};

const GET_STATE_WITH_PRODUCTS: "getStateWithProducts" = "getStateWithProducts";
const GET_ONE_PRODUCT: "getOneProduct" = "getOneProduct";
const DELETE_CATEGORY: "deleteCategory" = "deleteCategory";

export const getStateWithProductsThunk = (array: productType) => {
  return (dispatch: any) => {
    dispatch(getStateWithProducts(array));
  };
};
export const getOneProductsThunk = (item: OneProdectType) => {
  return (dispatch: any) => {
    dispatch(getOneProductAction(item));
  };
};

const ProductsReducer = (state = initialState, action: AllActionType) => {
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

const getStateWithProducts = (
  product: productType
): getStateWithProductsType => {
  return {
    type: GET_STATE_WITH_PRODUCTS,
    product,
  };
};

const getOneProductAction = (
  product: OneProdectType
): getOneProductActionType => {
  return {
    type: GET_ONE_PRODUCT,
    product,
  };
};

export const deleteCategoryAction = (): deleteCategoryActionType => {
  return {
    type: DELETE_CATEGORY,
  };
};

export default ProductsReducer;
