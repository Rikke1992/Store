import React from "react";
import style from "./Cart.module.css";

let Cart = (props) => {
  let PlusProductFoo = (e) => {
    props.PlusProductFoo(e.target.id);
  };
  let MinusProductFoo = (e) => {
    props.MinusProductFoo(e.target.id);
  };
  let TotalPrice = 0;
  let Amount;
  return (
    <div className={style.Cart}>
      <h1>Cart</h1>

      {props.cartProducts.value != 0 ? (
        props.cartProducts.products.map((item) => {
          Amount = item.prices[props.indexCurrencyActiv].currency;
          TotalPrice +=
            item.value != 1
              ? item.value * item.prices[props.indexCurrencyActiv].amount
              : item.prices[props.indexCurrencyActiv].amount;
          return (
            <div className={style.cartProduct} id={item.id}>
              <div className={style.cartProductFirstBlock}>
                <div>
                  <h2>{item.name}</h2>
                </div>

                <div className={style.currency}>
                  <div>{item.prices[props.indexCurrencyActiv].currency}</div>
                  <div>{item.prices[props.indexCurrencyActiv].amount}</div>
                </div>
                <div className={style.attributesBlock}>
                  {item.attributes.map((attributesItem) => {
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
              <div className={style.cartProductSecondBlock}>
                <div className={style.addBlock}>
                  <div
                    onClick={PlusProductFoo}
                    id={item.id}
                    className={style.addBlockPlus}
                  ></div>
                  <div className={style.valueItem}>
                    <span> {item.value} </span>
                  </div>
                  <div
                    onClick={MinusProductFoo}
                    id={item.id}
                    className={style.addBlockMinus}
                  ></div>
                </div>
                <div className={style.productImage}>
                  <img src={item.gallery[0]}></img>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <span>Cart is empty</span>
      )}
      <div className={style.totalCurrency}>
        <h2>Total Currency</h2>
        <div className={style.totalCurrencyValute}>
          {Amount + " " + Math.round(TotalPrice * 100) / 100}
        </div>
      </div>
    </div>
  );
};

export default Cart;
