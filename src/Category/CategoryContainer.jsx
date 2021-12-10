import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Category.module.css";
import { getStateWithProductsThunk } from "./../Redux/ProductsReducer";
import { connect } from "react-redux";
import { ProductsClothesCategorySelector } from "../Selectors/ProductsSelector";
import Category from "./Category";

class CategoryContainer extends React.Component {
  componentDidMount() {
    console.log("FirstQuery>>>" + { ...this.props.allProducts });

    this.props.getStateWithProductsThunk(this.props.allProducts);
  }

  render() {
    {
      if (this.props.Products) {
        return <Category Products={this.props.Products} />;
      } else {
        return "LOADING";
      }
    }
  }
}
let mapStateToProps = (state) => {
  return {
    Products: ProductsClothesCategorySelector(state),
  };
};
export default connect(mapStateToProps, { getStateWithProductsThunk })(
  CategoryContainer
);
