import React, { useState } from "react";
import style from "./SmallCartStyle.module.css";

let DropDownCart = (props) => {
  let AddFunc = (e) => {
    debugger;
    props.PlusProductFoo(e.target.id);
  };
  let MinusFunc = (e) => {
    debugger;
    props.MinusProductFoo(e.target.id);
  };
  if (props.stateOnBlure) {
    return (
      <div className={style.DropDown}>
        {props.cartProducts.products.length != 0
          ? props.cartProducts.products.map((it) => {
              debugger;
              return (
                <div>
                  <span>My bag</span>
                  <span> {props.cartProducts.value + "-items"} </span>
                  <div>{it.name}</div>
                  <div>{it.prices[0].amount + " " + it.prices[0].currency}</div>
                  <div>
                    <img src={it.gallery[0]}></img>
                  </div>
                  <div className={style.add}>
                    <img
                      onClick={AddFunc}
                      src={
                        "https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0="
                      }
                      id={it.id}
                    ></img>
                    <img
                      onClick={MinusFunc}
                      src={
                        "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54894/minus-emoji-clipart-md.png"
                      }
                      id={it.id}
                    ></img>
                  </div>
                </div>
              );
            })
          : props.ofBlurDropDownMenu()}
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DropDownCart;
