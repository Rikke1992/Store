import React from "react";
import { NavLink } from "react-router-dom";
import SmallCartContainer from "../Cart/SmallCart/SmallCartContainer";
import { QueryCurrencys } from "../Query/Query";
import style from "./Menu.module.css";
import logoHome from "./../Img/a-logo.png";
import { connect } from "react-redux";
import { CategorytSelector } from "../Selectors/ProductsSelector";
import { deleteCategoryAction } from "../Redux/ProductsReducer";

class Menu extends React.Component {
  deleteCategoryInStateFunc = () => {
    this.props.deleteCategoryAction();
  };
  render() {
    return (
      <div className={style.menu}>
        <nav>
          <ul>
            <div className={style.category}>
              <div
                className={
                  this.props.category == "clothes"
                    ? style.active
                    : style.notActive
                }
              >
                <li>
                  <NavLink to="/category/clothes">CLOTHES</NavLink>
                </li>
              </div>
              <div
                className={
                  this.props.category == "tech" ? style.active : style.notActive
                }
              >
                <li>
                  <NavLink to="/category/tech">TECH</NavLink>
                </li>
              </div>
            </div>
            <div
              className={style.home}
              onClick={this.deleteCategoryInStateFunc}
            >
              <li>
                <NavLink to="/">
                  <img src={logoHome} alt={"Home"}></img>
                </NavLink>
              </li>
            </div>
            <div className={style.currencyAndCurt}>
              <li>
                <QueryCurrencys />
              </li>
              <li className={style.SmallCartContainer}>
                <SmallCartContainer />
              </li>
            </div>
          </ul>
        </nav>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    category: CategorytSelector(state),
  };
};
export default connect(mapStateToProps, { deleteCategoryAction })(Menu);
