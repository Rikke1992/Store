import React from "react";

let Product = (props) => {
  debugger;
  if (!props.product) {
    return <div>loading please</div>;
  } else {
    return <div>OPA</div>;
  }
};
let a = () => {
  /*      <div>
  <div>
    {photo.map((item) => {
      return (
        <div id={item.photo}>
          <img src={item.photo}></img>
        </div>
      );
    })}
  </div>
  <div>
    <img src={this.state.mainPhoto}></img>
  </div>
  <div>
    <h1>{this.props.name}</h1>
    <h2>{this.props.descriptions}</h2>
    <div>
      <span>Size ore color</span>
      <div className={"sizeOreColor"}>
        {this.props.size.map(() => {})}
      </div>
      <div>
        <span>Price</span>
        <span>{this.props.price}</span>
      </div>
      <div>Add to Cart</div>
      <div>
        <p>Bla bla bla</p>
      </div>
    </div>
  </div>
</div> */
};
export default Product;
