import React from "react";
import Preloader from "../../../Preloader/Preloader";
import style from "./../productStyle.module.css";

let OptionsForTech = (props) => {
  let { attributes } = props.product;
  /*  let foo = () => {
    debugger;
    if (attributes.length == 0) {
      return null;
    } else {
      let newState = attributes.map((item) => {
        debugger;
        return { key: item.id, value: item.items.value };
      });
      return props.changeLocalStateForTech(newState);
    }
  };
 */
  let changeSizeExperiment = (e) => {
    debugger;

    let newState = { key: e.target.parentNode.id, value: e.target.id };
    return props.changeLocalStateForTech(newState);
  };
  let CheckItemForActiveClass = (name, obj) => {
    let result = props.optionsForTechCategory.some((exempl) => {
      return name == exempl.key && exempl.value == obj.displayValue;
    });
    debugger;
    return result;
  };

  if (attributes.length != 0) {
    return (
      <div className={style.sizes}>
        {attributes.map((item, index) => {
          let itemName = item.name;
          debugger;
          if (props.optionsForTechCategory.length == 0) {
            return <Preloader />;
          }
          return (
            <div id={item.name} className={style.product}>
              <span>{item.name}: </span>
              <div className={style.itemProduct} id={item.name}>
                {item.items.map((it) => {
                  debugger;
                  return (
                    <div
                      onClick={changeSizeExperiment}
                      id={it.id}
                      className={
                        props.optionsForTechCategory[index].value ==
                        it.displayValue
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
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default OptionsForTech;
