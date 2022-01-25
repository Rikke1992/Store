import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";
import СurrencyReducer from "./СurrencyReducer";

type reducersType = typeof reducers;
export type GlobalStateApp = ReturnType<reducersType>;

let reducers = combineReducers({
  Products: ProductsReducer,
  Cart: CartReducer,
  Сurrency: СurrencyReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
//@ts-ignore
window.store = store;

export default store;
