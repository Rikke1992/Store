import React, { useState } from "react";
import DropDownCart from "./DropDownCart";
import style from "./SmallCartStyle.module.css";

let SmallCart = (props) => {
  let [stateOnBlure, ChengeStateOnBlure] = useState(false);
  let onBlurDropDownMenu = (eent) => {
    let result = stateOnBlure ? false : true;
    return ChengeStateOnBlure(result);
  };
  debugger;
  return (
    <div onClick={onBlurDropDownMenu} className={style.smallCart}
    >
      <span>Cart</span>
      <span>{props.cartProducts.value ? props.cartProducts.value : null}</span>
      <DropDownCart {...props} stateOnBlure={stateOnBlure} />
    </div>
  );
};

export default SmallCart;
