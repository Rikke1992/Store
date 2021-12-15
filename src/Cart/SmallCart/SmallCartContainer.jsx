import React from "react";
import { connect } from "react-redux";
import {
  CartItemsProductSelector,
  CartProductSelector,
} from "../../Selectors/CartSelector";
import SmallCart from "./SmallCart";
import { PlusProductThunk, MinusProductThunk } from "./../../Redux/CartReducer";

class SmallCartContainer extends React.Component {
  PlusProductFoo = (id) => {
    debugger;
    this.props.PlusProductThunk(id);
  };

  MinusProductFoo = (id) => {
    debugger;
    this.props.MinusProductThunk(id);
  };
  render() {
    debugger;
    return (
      <SmallCart
        cartProducts={this.props.cartProducts}
        PlusProductFoo={this.PlusProductFoo}
        MinusProductFoo={this.MinusProductFoo}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: CartItemsProductSelector(state),
  };
};

export default connect(mapStateToProps, {
  PlusProductThunk,
  MinusProductThunk,
})(SmallCartContainer);
