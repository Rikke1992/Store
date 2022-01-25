import React from "react";
import { connect, ConnectedProps } from "react-redux";
import {
  CartItemsProductSelector,
  DropDownCheckSelector,
} from "../../Selectors/CartSelector";
import SmallCart from "./SmallCart";
import {
  PlusProductThunk,
  MinusProductThunk,
  dropDownCartChekThunk,
} from "../../Redux/CartReducer";
import { indexCurrencyActiv } from "../../Selectors/CurrencySelectors";
import { GlobalStateApp } from "../../Redux/ReduxStore";

type propsSmallCartFromRedux = ConnectedProps<typeof connector>;
class SmallCartContainer extends React.Component<propsSmallCartFromRedux> {
  PlusProductFoo = (id: string) => {
    this.props.PlusProductThunk(id);
  };

  MinusProductFoo = (id: string) => {
    this.props.MinusProductThunk(id);
  };
  render() {
    return (
      <SmallCart
        PlusProductFoo={this.PlusProductFoo}
        MinusProductFoo={this.MinusProductFoo}
        {...this.props}
      />
    );
  }
}
const mapStateToProps = (state: GlobalStateApp) => {
  return {
    cartProducts: CartItemsProductSelector(state),
    indexCurrencyActiv: indexCurrencyActiv(state),
    DropDownCheck: DropDownCheckSelector(state),
  };
};
const connector = connect(mapStateToProps, {
  PlusProductThunk,
  MinusProductThunk,
  dropDownCartChekThunk,
});

export default connector(SmallCartContainer);
