import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { QueryGetProductOfId } from "../../Query/Query";
import { ProductsCategorySelector } from "../../Selectors/ProductsSelector";
import Product from "./Product";

class ProductQueryComponent extends React.Component {
  findProduct() {
    if (this.props.product != null) {
      this.props.product.find((item) => {
        debugger;
        return item.id == this.props.match.params.id;
      });
    } else {
      debugger;
      return undefined;
    }
  }
  render() {
    debugger;
    if (this.findProduct()) {
      debugger;
      return <Product product={'this.findProduct()'} />;
    } else {
      debugger;

      return (
        <QueryGetProductOfId value={this.props.match.params.id} />
        /*      <div>
          <div>
            {photo.map((item) => {
              return (
                <div id={item.photo}>
                  <img src={item.photo}></img>
                </div>
              );
            })}
          </div>
          <div>
            <img src={this.state.mainPhoto}></img>
          </div>
          <div>
            <h1>{this.props.name}</h1>
            <h2>{this.props.descriptions}</h2>
            <div>
              <span>Size ore color</span>
              <div className={"sizeOreColor"}>
                {this.props.size.map(() => {})}
              </div>
              <div>
                <span>Price</span>
                <span>{this.props.price}</span>
              </div>
              <div>Add to Cart</div>
              <div>
                <p>Bla bla bla</p>
              </div>
            </div>
          </div>
        </div> */
      );
    }
  }
}
let mapStateToProps = (state) => {
  return {
    product: ProductsCategorySelector(state),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {})
)(ProductQueryComponent);
