import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDownCart from "./DropDownCart";
import style from "./SmallCartStyle.module.css";
import logoCart from "./../../Img/Vector.png";

let SmallCart = (props) => {
  
  let onBlurDropDownMenu = () => {
    return props.dropDownCartChekThunk(true);
  };
  let ofBlurDropDownMenu = () => {
    return props.dropDownCartChekThunk(false);
  };

  return (
    <div
      onMouseEnter={onBlurDropDownMenu}
      onMouseLeave={ofBlurDropDownMenu}
      className={style.smallCart}
    >
      <NavLink to="/Cart">
        <img src={logoCart}></img>

        {props.cartProducts.value ? (
          <div className={style.smallCartSpan}>
            <span>{props.cartProducts.value}</span>
          </div>
        ) : null}
      </NavLink>
      <DropDownCart
        {...props}
        /* stateOnBlure={stateOnBlure} */
        ofBlurDropDownMenu={ofBlurDropDownMenu}
      />
    </div>
  );
};

export default SmallCart;
