import React from "react";
import { connect } from "react-redux";
import {
  CartItemsProductSelector,
  DropDownCheckSelector,
} from "../../Selectors/CartSelector";
import SmallCart from "./SmallCart";
import {
  PlusProductThunk,
  MinusProductThunk,
  dropDownCartChekThunk,
} from "./../../Redux/CartReducer";
import {
  indexCurrencyActiv,
  totalCurrencySelector,
} from "../../Selectors/CurrencySelectors";

class SmallCartContainer extends React.Component {
  PlusProductFoo = (id) => {
    this.props.PlusProductThunk(id);
  };

  MinusProductFoo = (id) => {
    this.props.MinusProductThunk(id);
  };
  render() {
    return (
      <SmallCart
        cartProducts={this.props.cartProducts}
        PlusProductFoo={this.PlusProductFoo}
        MinusProductFoo={this.MinusProductFoo}
        {...this.props}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProducts: CartItemsProductSelector(state),
    indexCurrencyActiv: indexCurrencyActiv(state),
    totalCurrency: totalCurrencySelector(state),
    DropDownCheck: DropDownCheckSelector(state),
  };
};

export default connect(mapStateToProps, {
  PlusProductThunk,
  MinusProductThunk,
  dropDownCartChekThunk,
})(SmallCartContainer);
