import React from "react";
import { connect } from "react-redux";
import { getOneProductsThunk } from "../../Redux/ProductsReducer";
import { ProductsCategorySelector } from "../../Selectors/ProductsSelector";
import Product from "./Product";

class ProductComponent extends React.Component {
  componentDidMount() {
    if (this.props.oneProduct) {
      debugger;
      this.props.getOneProductsThunk(this.props.data);
    }
  }
  render() {
    return <Product product={this.props.product} />;
  }
}
let mapStateToProps = (state) => {
  return {
    product: ProductsCategorySelector(state),
  };
};

export default connect(mapStateToProps, { getOneProductsThunk })(
  ProductComponent
);
