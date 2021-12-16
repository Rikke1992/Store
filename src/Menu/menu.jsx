import React from "react";
import { NavLink } from "react-router-dom";
import SmallCartContainer from "../Cart/SmallCart/SmallCartContainer";
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
              <div id={"USD"}>USD</div>
              <div id={"GBP"}>GBP</div>
              <div id={"AUD"}>AUD</div>
              <div id={"JPY"}>JPY</div>
              <div id={"RUB"}>RUB</div>
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
