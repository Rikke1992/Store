/* import React from "react";
import style from "./../productStyle.module.css";
let SIZE = "Size";

let SizeComponent = (props) => {
  let { attributes } = props.product;
  let changeSize = (e) => {
    debugger;
    return props.changeLocalStateSize(e.target.id);
  };
  return (
    <div>
      <h2>Size</h2>
      <div className={style.sizes}>
        <span>{attributes[0].id} </span>
        {attributes[0].items.map((it) => {
          debugger;
          return (
            <div
              id={it.id}
              onClick={changeSize}
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
    </div>
  );
};

export default SizeComponent;
 */
