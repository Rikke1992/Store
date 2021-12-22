import React from "react";
import { connect } from "react-redux";
import { CurencyActiv, CurencyList } from "../Selectors/CurrencySelectors";
import Currency from "./Currency";

class CurrencyComponent extends React.Component {
  render() {
    return <Currency 
    {...this.props} />;
  }
}
let mapStateToProps = (state) => {
  return {
    CurencyListArray: CurencyList(state),
    CurencyActivItem: CurencyActiv(state),
  };
};
export default connect(mapStateToProps, {})(CurrencyComponent);
