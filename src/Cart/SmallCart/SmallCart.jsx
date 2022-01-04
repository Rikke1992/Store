import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownCart from "./DropDownCart";
import style from "./SmallCartStyle.module.css";
import logoCart from "./../../Img/Vector.png";

let SmallCart = (props) => {
  let [stateOnBlure, ChangeStateOnBlure] = useState(false);
  let onBlurDropDownMenu = () => {
    return ChangeStateOnBlure(true);
  };
  let ofBlurDropDownMenu = () => {
    return ChangeStateOnBlure(false);
  };

  debugger;
  return (
    <div
      onMouseEnter={onBlurDropDownMenu}
      onMouseLeave={ofBlurDropDownMenu}
      className={style.smallCart}
    >
      <NavLink to="/Cart">
        <img src={logoCart}></img>
        <span>
          {props.cartProducts.value ? props.cartProducts.value : null}
        </span>
      </NavLink>
      <DropDownCart
        {...props}
        stateOnBlure={stateOnBlure}
        ofBlurDropDownMenu={ofBlurDropDownMenu}
      />
    </div>
  );
};

export default SmallCart;
