import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { QueryGetProductOfId } from "../../Query/Query";
import { AddToCartProductThunk } from "./../../Redux/CartReducer";
import {
  
  ProductsCategorySelector,
} from "../../Selectors/ProductsSelector";
import Product from "./Product";
import { CartProductSelector } from "../../Selectors/CartSelector";

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
  addToCartProductFunk = () => {
    let product = this.findProduct();
    /*   attributes: [{…}]
brand: "Nike x Stussy"
category: "clothes"
description: "<p>Great sneakers for everyday use!</p>"
gallery: (5) ["https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"]
id: "huarache-x-stussy-le"
inStock: true
name: "Nike Air Huarache Le"
prices: (5) [{…}, {…}, {…}, {…}, {…}] */

    debugger;
    /*  let { id: 0, value: 0, name: "", cateory: "", photo: ""  }=this.props.product[0]; */
    return this.props.AddToCartProductThunk(this.findProduct());
  };

  render() {
    if (this.state.isLoading) {
      debugger;
      return <div>LOADING PLEEEEase</div>;
    } else {
      debugger;
      if (this.state.productInState) {
        debugger;
        return (
          <Product
            product={this.findProduct()}
            addToCartProduct={this.addToCartProductFunk}
          />
        );
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
    CartProduct: CartProductSelector(state),
  };
};
export default compose(
  withRouter,
  connect(mapStateToProps, { AddToCartProductThunk })
)(ProductQueryComponent);
