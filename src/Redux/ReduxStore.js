import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import ProductsReducer from "./ProductsReducer";
import CartReducer from "./CartReducer";
import СurrencyReducer from "./СurrencyReducer";

let reducers = combineReducers({
  Products: ProductsReducer,
  Cart: CartReducer,
  Сurrency: СurrencyReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
