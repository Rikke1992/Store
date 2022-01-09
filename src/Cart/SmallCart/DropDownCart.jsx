import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DropDownCart.module.css";

let DropDownCart = (props) => {
  let AddFunc = (e) => {
    props.PlusProductFoo(e.target.id);
  };
  let MinusFunc = (e) => {
    props.MinusProductFoo(e.target.id);
  };
  let TotalPrice = 0;
  let Amount;
  let TotalCurrencyFunc = () => {};
  if (props.DropDownCheck) {
    return (
      <div className={style.DropDown}>
        <div className={style.DropDownHeaderInfo}>
          <h2>My bag, </h2> <span>{props.cartProducts.value} items</span>
        </div>
        {props.cartProducts.products.length != 0
          ? props.cartProducts.products.map((it) => {
              //Push activ amount
              Amount = it.prices[props.indexCurrencyActiv].currency;
              //Push activ TotalPrice
              TotalPrice +=
                it.value != 1
                  ? it.value * it.prices[props.indexCurrencyActiv].amount
                  : it.prices[props.indexCurrencyActiv].amount;

              return (
                //render item name, currency, and other atributes
                <div className={style.cartItems}>
                  <div className={style.CartitemWraper}>
                    <div className={style.itemName}>{it.name}</div>
                    <div className={style.curencyBlock}>
                      <div>{it.prices[props.indexCurrencyActiv].currency}</div>
                      <div>{it.prices[props.indexCurrencyActiv].amount}</div>
                    </div>
                    <div className={style.attributesBlock}>
                      {it.attributes.map((attributesItem) => {
                        return (
                          <div className={style.attributesItem}>
                            <div className={style.attributesItemKey}>
                              {attributesItem.items.key}:
                            </div>
                            <div className={style.attributesItemValue}>
                              <span> {attributesItem.items.value}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className={style.addBlock}>
                    <div
                      onClick={AddFunc}
                      id={it.id}
                      className={style.addBlockPlus}
                    >
                      {/*  <span>+</span> */}
                    </div>
                    <div className={style.valueItem}>
                      <span> {it.value} </span>
                    </div>
                    <div
                      onClick={MinusFunc}
                      id={it.id}
                      className={style.addBlockMinus}
                    >
                      {/*    <span>-</span> */}
                    </div>
                  </div>
                  <div className={style.itemPhoto}>
                    <img src={it.gallery[0]}></img>
                  </div>
                </div>
              );
            })
          : props.ofBlurDropDownMenu()}
        <div className={style.totalPrice}>
          <span>Total</span>
          <span>
            {Math.round(TotalPrice * 100) / 100}
            {Amount}
          </span>
        </div>
        <NavLink to="/Cart">
          <div className={style.buttonGoToCart}> Go to Cart</div>
        </NavLink>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DropDownCart;
