import React from "react";
import { getStateWithProductsThunk } from "./../Redux/ProductsReducer";
import { connect } from "react-redux";
import { ProductsCategorySelector } from "../Selectors/ProductsSelector";
import Category from "./Category";

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.getStateWithProductsThunk(this.props.allProducts);
  }
  componentDidUpdate(prevState) {
    if (prevState.Products != this.props.allProducts) {
      return this.props.getStateWithProductsThunk(this.props.allProducts);
    }
  }

  render() {
    {
      if (this.props.Products == this.props.allProducts) {
        return <Category Products={this.props.Products} />;
      } else {
        return <div>"LOADING"</div>;
      }
    }
  }
}
let mapStateToProps = (state) => {
  return {
    Products: ProductsCategorySelector(state),
  };
};
export default connect(mapStateToProps, {
  getStateWithProductsThunk,
})(CategoryContainer);
