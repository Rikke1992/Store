import React from "react";
import { useState } from "react";
import CurrencyDropDown from "./CurrencyDropDown";

let Currency = (props) => {
  let [onMouse, ChengeMouseSettings] = useState(false);
  let onMouseFunk = () => {
    return ChengeMouseSettings(true);
  };
  let ofMouseFunc = () => {
    return ChengeMouseSettings(false);
  };
  debugger;
  return (
    <div onMouseEnter={onMouseFunk} onMouseLeave={ofMouseFunc}>
      {props.CurencyActivItem}
      <CurrencyDropDown onMouse={onMouse} />
    </div>
  );
};
export default Currency;
