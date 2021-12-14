import React from "react";
import { connect } from "react-redux";
import { getOneProductsThunk } from "../../Redux/ProductsReducer";
import {
  OneProductSelector,
  ProductsCategorySelector,
} from "../../Selectors/ProductsSelector";
import Product from "./Product";

class ProductComponent extends React.Component {
  componentDidMount() {
    debugger;
    this.props.getOneProductsThunk(this.props.data.product);
    debugger;
  }
  render() {
    debugger;
    if (this.props.GetOneProduct) {
      return <Product product={this.props.GetOneProduct} />;
    } else {
      debugger;
      return <span>LOADING</span>;
    }
  }
}
let mapStateToProps = (state) => {
  return {
    product: ProductsCategorySelector(state),
    GetOneProduct: OneProductSelector(state),
  };
};

export default connect(mapStateToProps, { getOneProductsThunk })(
  ProductComponent
);
