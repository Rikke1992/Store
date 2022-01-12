import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CartContainer from "./Cart/CartContainer";
import CheckCategoryAndQuery from "./Category/CheckCategoryAndQuery";
import ProductQueryComponent from "./Category/Product/ProductQueryComponent";
import { CategorytSelector } from "./Selectors/ProductsSelector";
import { deleteCategoryAction } from "./Redux/ProductsReducer";
class Wraper extends React.Component {
  deleteCategoryInStateFunc = () => {
    return this.props.deleteCategoryAction();
  };
  render() {
    return (
      <div>
        <Route
          exact
          path="/category/:category"
          render={() => {
            return <CheckCategoryAndQuery />;
          }}
        />

        <Route
          exact
          path="/Category/:category/:id"
          render={() => {
            return <ProductQueryComponent />;
          }}
        />

        <Route
          path="/Cart"
          render={() => {
            this.deleteCategoryInStateFunc();

            return <CartContainer />;
          }}
        />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    category: CategorytSelector(state),
  };
};
export default connect(mapStateToProps, { deleteCategoryAction })(Wraper);
