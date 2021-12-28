import React, { useEffect } from "react";
import Preloader from "../../Preloader/Preloader";
import OptionsForTech from "./DisassembledProductsComponents/OptionsForTech";
import SizeComponent from "./DisassembledProductsComponents/SizeComponent";
import style from "./productStyle.module.css";

let Product = (props) => {
  let { gallery, name, description, prices, attributes, inStock, category } =
    props.product;
  let AddDefaultValueForClothesState = () => {
    debugger;
    if (attributes.length == 0) {
      return null;
    } else {
      return props.changeLocalStateSize(attributes[0].items[0].id);
    }
  };
  let AddDefaultValueForTechState = () => {
    debugger;
    if (attributes.length == 0) {
      return null;
    } else if (props.optionsForTechCategory.length == 0) {
      let newState = attributes.map((item) => {
        debugger;
        return { key: item.id, value: item.items[0].displayValue };
      });
      debugger;
      return props.changeLocalStateForTech(newState);
    }
  };

  /* let chengeSize = (e) => {
    debugger;
    return props.changeLocalStateSize(e.target.id);
  }; */
  let AddProductToCart = () => {
    return props.addToCartProductFunk(
      props.product,
      props.optionsForTechCategory
    );
  };

  debugger;
  if (!props.product.category) {
    return <Preloader />;
  } else {
    {
      /* Check the input size value */
    }
    {
      category == "clothes"
        ? AddDefaultValueForClothesState()
        : AddDefaultValueForTechState();
    }
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
            {category == "clothes" ? (
              <SizeComponent {...props} />
            ) : (
              <OptionsForTech {...props} />
            )}

            {/* <div>
              <h2>Size ore color</h2>
              <div className={style.sizes}>
                <span>{attributes[0].id} </span>
                {attributes[0].items.map((it) => {
                  debugger;
                  return (
                    <div
                      id={it.id}
                      onClick={chengeSize}
                      className={
                        it.displayValue == props.localStateSize
                          ? style.sizesItemCheck
                          : style.sizesItem
                      }
                    >
                      {it.displayValue}
                    </div>
                  );
                })}
              </div>
            </div> */}
            <div>
              <span>Price</span>
            </div>

            {/*  sheck is activ the product? */}
            {inStock ? (
              <button onClick={AddProductToCart}>Add to Cart</button>
            ) : (
              <div className={style.available}>
                <h2>Not available</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Product;
