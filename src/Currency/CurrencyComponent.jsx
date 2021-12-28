import React from "react";
import { connect } from "react-redux";
import {
  ChangeCurrencyThunk,
  GetCurrencyThunk,
} from "../Redux/СurrencyReducer";
import { CurencyActiv, CurencyList } from "../Selectors/CurrencySelectors";
import Currency from "./Currency";

class CurrencyComponent extends React.Component {
  componentDidMount() {
    this.props.GetCurrencyThunk(this.props.currencies);
  }
  changeCurrencyFunc = (currency) => {
    return this.props.ChangeCurrencyThunk(currency);
  };
  render() {
    debugger;
    return (
      <Currency {...this.props} changeCurrencyFuncToProps={this.changeCurrencyFunc} />
    );
  }
}
let mapStateToProps = (state) => {
  return {
    CurencyListArray: CurencyList(state),
    CurencyActivItem: CurencyActiv(state),
  };
};
export default connect(mapStateToProps, {
  GetCurrencyThunk,
  ChangeCurrencyThunk,
})(CurrencyComponent);
