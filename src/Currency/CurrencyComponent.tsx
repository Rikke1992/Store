import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { GlobalStateApp } from "../Redux/ReduxStore";
import {
  ChangeCurrencyThunk,
  GetCurrencyThunk,
} from "../Redux/СurrencyReducer";
import { CurencyActiv, CurencyList } from "../Selectors/CurrencySelectors";
import Currency from "./Currency";

type ThisPropsType = { currencies: Array<string> };
type AllProps = ThisPropsType & propsFromRedux;
export type propsFromRedux = ConnectedProps<typeof connector>;

class CurrencyComponent extends React.Component<AllProps> {
  componentDidMount() {
    this.props.GetCurrencyThunk(this.props.currencies);
  }
  changeCurrencyFunc = (currency: any) => {
    return this.props.ChangeCurrencyThunk(currency);
  };
  render() {
    return (
      <Currency
        {...this.props}
        changeCurrencyFuncToProps={this.changeCurrencyFunc}
      />
    );
  }
}
let mapStateToProps = (state: GlobalStateApp) => {
  return {
    CurencyListArray: CurencyList(state),
    CurencyActivItem: CurencyActiv(state),
  };
};

const connector = connect(mapStateToProps, {
  GetCurrencyThunk,
  ChangeCurrencyThunk,
});

export default connector(CurrencyComponent);
