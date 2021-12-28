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
        <h2>Options</h2>
        {attributes.map((item, index) => {
          let itemName = item.name;
          debugger;
          if (props.optionsForTechCategory.length == 0) {
            return <Preloader />;
          }
          return (
            <div id={item.name}>
              <span>{item.name} </span>
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
          );
        })}
      </div>
    );
  } else {
    return <Preloader />;
  }
};
let a = `(import React from "react";
import style from "./../productStyle.module.css";

let OptionsForTech = (props) => {
  let { attributes } = props.product;

  let changeSizeExperiment = (e) => {
    debugger;
    /* optionsForTechCategory */
    let newState = { key: e.target.parentNode.id, value: e.target.id };
    return props.changeLocalStateForTech(newState);
  };
  let changeSize = (e) => {
    debugger;
    return props.changeLocalStateSize(e.target.id);
  };
  let vremenno = () => {
    return (
      <div>
        <h2>Options</h2>
        <div className={style.sizes}>
          {attributes.map((item) => {
            debugger;
            return (
              <div id={item.name}>
                <span>{item.name} </span>
                {item.items.map((it) => {
                  debugger;
                  /*  (displayValue: "Green"
              id: "Green"
              value: "#44FF03"
              __typename: "Attribute") */
                  return (
                    <div
                      onClick={changeSizeExperiment}
                      id={it.id}
                      className={
                        props.optionsForTechCategory.some((exempl) => {
                          debugger;
                          return exempl.value == it.displayValue;
                        })
                          ? style.sizesItemCheck
                          : style.sizesItem
                        /* it.displayValue == props.localStateSize
                      ? style.sizesItemCheck
                      : style.sizesItem */
                      }
                    >
                      {it.displayValue}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  if (attributes.length != 0) {
    return (
      <div className={style.sizes}>
        <h2>Options</h2>
        {attributes.map((item) => {
          let itemName = item.name;
          debugger;
          return (
            <div id={item.name}>
              <span>{item.name} </span>
              {item.items.map((it) => {
                return (
                  <div
                    onClick={changeSizeExperiment}
                    id={it.id}
                    className={
                      props.optionsForTechCategory.some((exempl) => {
                        debugger;
                        return (
                          itemName == exempl.key &&
                          exempl.value == it.displayValue
                        );
                      })
                        ? style.sizesItemCheck
                        : style.sizesItem
                    }
                  >
                    {it.displayValue}
                  </div>
                );
              })}
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
)`;
export default OptionsForTech;
