import React from "react";
import { NavLink } from "react-router-dom";
import SmallCartContainer from "../Cart/SmallCart/SmallCartContainer";
import CurrencyComponent from "../Currency/CurrencyComponent";
import { QueryCurrencys } from "../Query/Query";
import style from "./Menu.module.css";
import logoHome from "./../Img/a-logo.png";

class Menu extends React.Component {
  state = {
    category: null,
  };
  changeCategory = (e) => {
    debugger;
    let value = e.target.innerText;
    return (this.state = { category: value });
  };
  render() {
    return (
      <div className={style.menu}>
        <nav>
          <ul>
            <div className={style.category}>
              <div
                className={
                  this.state.category == "clothes" ? style.active : null
                }
              >
                <li onClick={this.changeCategory}>
                  <NavLink to="/category/clothes">CLOTHES</NavLink>
                </li>
              </div>
              <div
                className={this.state.category == "tech" ? style.active : null}
              >
                <li onClick={this.changeCategory}>
                  <NavLink to="/category/tech">TECH</NavLink>
                </li>
              </div>
            </div>
            <div className={style.home}>
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
export default Menu;
