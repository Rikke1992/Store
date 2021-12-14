import React from "react";
import { connect } from "react-redux";
import {
  CartItemsProductSelector,
  CartProductSelector,
} from "../../Selectors/CartSelector";
import SmallCart from "./SmallCart";

class SmallCartContainer extends React.Component {
  render() {
    debugger;
    return <SmallCart cartProducts={this.props.cartProducts} />;
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: CartItemsProductSelector(state),
  };
};

export default connect(mapStateToProps, {})(SmallCartContainer);
