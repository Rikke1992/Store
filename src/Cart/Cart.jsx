import React from "react";

let Cart = (props) => {
  let PlusProductFoo = (e) => {
    props.PlusProductFoo(e.target.id);
  };
  let MinusProductFoo = (e) => {
    props.MinusProductFoo(e.target.id);
  };
  debugger;
  return (
    <div>
      <h1>Cart</h1>

      {props.cartProducts.value != 0 ? (
        props.cartProducts.products.map((item) => {
          return (
            <div className={"cartProduct"} id={item.id}>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>
                {item.prices[0].amount} {item.prices[0].currency}
              </div>
              <div>
                <img src={item.gallery[0]}></img>
              </div>
              <div>Pieces= {item.value}</div>
              <div>
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
    </div>
  );
};

export default Cart;
