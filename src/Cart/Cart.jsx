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
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>
                <div>{item.prices[props.indexCurrencyActiv].amount}</div>
                <div>{item.prices[props.indexCurrencyActiv].currency}</div>
              </div>
              <div>
                <img src={item.gallery[0]}></img>
              </div>
              <div>Pieces= {item.value}</div>
              <div className={style.Plus}>
                <img
                  onClick={PlusProductFoo}
                  src={
                    "https://media.istockphoto.com/vectors/black-plus-sign-positive-symbol-vector-id688550958?k=20&m=688550958&s=612x612&w=0&h=wvzUqT3u3feYygOXg3GB9pYBbqIsyu_xpvfTX-6HOd0="
                  }
                  id={item.id}
                ></img>
                <img
                  onClick={MinusProductFoo}
                  src={
                    "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/54894/minus-emoji-clipart-md.png"
                  }
                  id={item.id}
                ></img>
              </div>
            </div>
          );
        })
      ) : (
        <span>Cart is empty</span>
      )}
      <div>
        <h2>Total Currency</h2>
        <div>{Amount}</div> {Math.round(TotalPrice * 100) / 100}
      </div>
    </div>
  );
};

export default Cart;
