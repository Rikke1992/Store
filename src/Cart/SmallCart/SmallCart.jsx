import React, { useState } from "react";

let SmallCart = (props) => {
  let [stateOnBlure, ChengeStateOnBlure] = useState(false);
  let onBlurDropDownMenu = (event) => {
    debugger;
    console.log(event);
    return ChengeStateOnBlure(true);
  };
  debugger;
  return (
    <div>
      <div onClick={onBlurDropDownMenu}>
        <span>Cart</span>
        <span>
          {props.cartProducts.value ? props.cartProducts.value : null}
        </span>
      </div>
      <div>
        {props.cartProducts.products.length != 0
          ? props.cartProducts.products.map((it) => {
              debugger;
              return (
                <div>
                  <span>My bag</span>
                  <span> {props.cartProducts.value + "-items"} </span>
                  <div>{it.name}</div>
                  <div>{it.prices[0].amount + " " + it.prices[0].currency}</div>
                  {/* <div>
                    <img src={it.gallery[0]}></img>
                  </div> */}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default SmallCart;
