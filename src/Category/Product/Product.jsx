import React from "react";

let Product = (props) => {
  debugger;
  if (!props.product) {
    return <div>loading please</div>;
  } else {
    return <div>OPA</div>;
  }
};

export default Product;
