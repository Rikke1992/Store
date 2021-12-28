import React from "react";
import { NavLink } from "react-router-dom";
import SmallCartContainer from "../Cart/SmallCart/SmallCartContainer";
import CurrencyComponent from "../Currency/CurrencyComponent";
import { QueryCurrencys } from "../Query/Query";
import style from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <nav>
          <ul>
            <li>
              <NavLink to="/category/clothes">Clothes</NavLink>
            </li>
            <li>
              <NavLink to="/category/tech">Tech</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <QueryCurrencys />
            </li>
            <li>
              <NavLink to="/Cart">
                <SmallCartContainer />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Menu;
