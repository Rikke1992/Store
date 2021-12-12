import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { QueryGetProductOfId } from "../../Query/Query";
import { ProductsCategorySelector } from "../../Selectors/ProductsSelector";
import Product from "./Product";

class ProductQueryComponent extends React.Component {
  state = {
    productInState: null,
    isLoading: true,
  };
  ProductInStateChange = () => {
    this.setState({
      productInState: true,
    });
  };
  IsLoadingChange = () => {
    this.setState({ isLoading: false });
  };
  findProduct() {
    if (this.props.product != null) {
      return this.props.product.find((item) => {
        debugger;

        return item.id == this.props.match.params.id;
      });
    } else {
      debugger;
      return undefined;
    }
  }
  componentDidMount() {
    debugger;
    if (this.findProduct()) {
      this.ProductInStateChange();
      this.IsLoadingChange();
      debugger;
    } else {
      return this.IsLoadingChange();
    }
  }

  render() {
    if (this.state.isLoading) {
      debugger;
      return <div>LOADING PLEEEEase</div>;
    } else {
      debugger;
      if (this.state.productInState) {
        debugger;
        return <Product product={"alalala"} />;
      } else {
        debugger;
        return <QueryGetProductOfId value={this.props.match.params.id} />;
      }
    }

    /* debugger;
    if (this.findProduct()) {
      debugger;
      return <Product product={"this.findProduct()"} />;
    } else {
      debugger;

      return <QueryGetProductOfId value={this.props.match.params.id} />;
    } */
  }
}

/* class ProductQueryComponent extends React.Component {
  render() {
    return <QueryGetProductOfId value={this.props.match.params.id} />;
  }
} */
let mapStateToProps = (state) => {
  return {
    product: ProductsCategorySelector(state),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, {})
)(ProductQueryComponent);
