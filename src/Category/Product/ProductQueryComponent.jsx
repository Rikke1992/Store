import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { QueryGetProductOfId } from "../../Query/Query";
import { AddToCartProductThunk } from "./../../Redux/CartReducer";
import { ProductsCategorySelector } from "../../Selectors/ProductsSelector";
import Product from "./Product";
import { CartProductSelector } from "../../Selectors/CartSelector";
import Preloader from "../../Preloader/Preloader";

class ProductQueryComponent extends React.Component {
  componentDidMount() {}
  state = {
    options: [],
    size: null,
    productInState: null,
    isLoading: true,
  };
  changeLocalStateSize = (item) => {
    return this.setState({
      size: item,
    });
  };
  changeLocalStateForTech = (item) => {
    //Add default value in first loading
    if (this.state.options.length == 0) {
      debugger;
      return this.setState({ options: item });
    } else {
      //Chenge local options
      let newStateOptions = this.state.options.map((it) => {
        debugger;
        return item.key == it.key ? item : it;
      });
      debugger;
      return this.setState({ options: newStateOptions });
    }
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
  addToCartProductFunk = (
    someProduct = this.findProduct(),
    optionsForTechCategory
  ) => {
    debugger;
    let NewStateProduct = { ...someProduct };
    debugger;
    NewStateProduct.attributes = NewStateProduct.attributes.map(
      (item, index) => {
        debugger;
        let result = { ...item };
        result.items = optionsForTechCategory[index];
        return result;
      }
    );
    return this.props.AddToCartProductThunk(NewStateProduct);
  };
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
      return <Preloader />;
    } else {
      debugger;
      if (this.state.productInState) {
        debugger;
        return (
          <Product
            optionsForTechCategory={this.state.options}
            changeLocalStateForTech={this.changeLocalStateForTech}
            changeLocalStateSize={this.changeLocalStateSize}
            localStateSize={this.state.size}
            product={this.findProduct()}
            addToCartProductFunk={this.addToCartProductFunk}
          />
        );
      } else {
        debugger;
        return (
          <QueryGetProductOfId
            optionsForTechCategory={this.state.options}
            changeLocalStateForTech={this.changeLocalStateForTech}
            changeLocalStateSize={this.changeLocalStateSize}
            localStateSize={this.state.size}
            value={this.props.match.params.id}
            addToCartProductFunk={this.addToCartProductFunk}
          />
        );
      }
    }
  }
}

let mapStateToProps = (state) => {
  return {
    product: ProductsCategorySelector(state),
    CartProduct: CartProductSelector(state),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { AddToCartProductThunk })
)(ProductQueryComponent);
