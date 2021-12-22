import React from "react";
import { connect } from "react-redux";
import Preloader from "../../Preloader/Preloader";
import { getOneProductsThunk } from "../../Redux/ProductsReducer";
import {
  OneProductSelector,
  ProductsCategorySelector,
} from "../../Selectors/ProductsSelector";
import Product from "./Product";

class ProductComponent extends React.Component {
  /*  state = {
    size: null,
  };
  changeLocalStateSize = (item) => {
    return this.setState({
      size: item,
    });
  }; */
  componentDidMount() {
    debugger;
    this.props.getOneProductsThunk(this.props.data.product);
    debugger;
  }
  render() {
    debugger;
    if (this.props.GetOneProduct) {
      return <Product {...this.props} product={this.props.GetOneProduct} />;
    } else {
      debugger;
      return <Preloader />;
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
