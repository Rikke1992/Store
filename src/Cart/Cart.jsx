import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1>Cart</h1>
        {this.props.items ? (
          this.props.value.map((item) => {
            return (
              <div className={"cartProduct"}>
                <div>{item.name}</div>
                <div>{item.current}</div>
                <div>{item.photo}</div>
              </div>
            );
          })
        ) : (
          <span>Cart is empty</span>
        )}
      </div>
    );
  }
}

export default Cart;
