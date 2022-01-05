import React from "react";
import { connect } from "react-redux";
import { CartItemsProductSelector } from "../Selectors/CartSelector";
import Cart from "./Cart";
import {
  MinusProductThunk,
  PlusProductThunk,
} from "./../Redux/CartReducer.jsx";
import { indexCurrencyActiv } from "../Selectors/CurrencySelectors";

class CartContainer extends React.Component {
  MinusProductFoo = (id) => {
    this.props.MinusProductThunk(id);
  };
  PlusProductFoo = (id) => {
    this.props.PlusProductThunk(id);
  };
  render() {
    return (
      <Cart
        {...this.props}
        MinusProductFoo={this.MinusProductFoo}
        PlusProductFoo={this.PlusProductFoo}
      />
    );
  }
}
let MapStateToProps = (state) => {
  return {
    cartProducts: CartItemsProductSelector(state),
    indexCurrencyActiv: indexCurrencyActiv(state),
  };
};

export default connect(MapStateToProps, {
  MinusProductThunk,
  PlusProductThunk,
})(CartContainer);
