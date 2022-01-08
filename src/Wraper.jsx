import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CartContainer from "./Cart/CartContainer";
import CheckCategoryAndQuery from "./Category/CheckCategoryAndQuery";
import ProductQueryComponent from "./Category/Product/ProductQueryComponent";
import { DropDownCheckSelector } from "./Selectors/CartSelector";

class Wraper extends React.Component {
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
            return <CartContainer />;
          }}
        />
      </div>
    );
  }
}

export default Wraper;
