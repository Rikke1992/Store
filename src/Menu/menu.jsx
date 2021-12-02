import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";

class Menu extends React.Component {
  render() {
    return (
      <div className={style.menu}>
        <nav>
          <ul>
            <li>
              <NavLink to="/Category/Clothes">Clothes</NavLink>
            </li>
            <li>
              <NavLink to="/Category/Tech">Tech</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <div id={"USD"}>USD</div>
              <div id={"GBP"}>GBP</div>
              <div id={"AUD"}>AUD</div>
              <div id={"JPY"}>JPY</div>
              <div id={"RUB"}>RUB</div>
            </li>
            <li>
              <NavLink to="/Cart">Basket</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Menu;