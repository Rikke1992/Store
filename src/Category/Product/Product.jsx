import React from "react";
import style from "./productStyle.module.css";

let Product = (props) => {
  /*   attributes: [{…}]
brand: "Nike x Stussy"
category: "clothes"
description: "<p>Great sneakers for everyday use!</p>"
gallery: (5) ["https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_1_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_3_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_5_720x.jpg?v=1612816087", "https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_4_720x.jpg?v=1612816087"]
id: "huarache-x-stussy-le"
inStock: true
name: "Nike Air Huarache Le"
prices: (5) [{…}, {…}, {…}, {…}, {…}] */
  let { gallery, name, description, prices, attributes } = props.product;
  debugger;
  if (!props.product) {
    return <div>loading please</div>;
  } else {
    return (
      <div className={style.wraperProduct}>
        <div className={style.carouselProduct}>
          {gallery.map((item) => {
            return (
              <div id={item}>
                <img src={item}></img>
              </div>
            );
          })}
        </div>
        <div className={style.mainPhoto}>
          <img src={gallery[0]}></img>
        </div>
        <div>
          <h1>{name}</h1>
          {description}
          <div>
            <span>Size ore color</span>
            {/*  <div className={"sizeOreColor"}>{attributes.map(() => {})}</div> */}
            <div>
              <span>Price</span>
              {/*      <span>{prices[0]}</span> */}
            </div>
            <button onClick={props.addToCartProduct}>Add to Cart</button>
            <div>
              <p>Bla bla bla</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
/* let a = () => {
     <div>
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
</div> 
}; */
export default Product;
