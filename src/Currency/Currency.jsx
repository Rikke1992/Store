import React from "react";
import { useState } from "react";
import CurrencyDropDown from "./CurrencyDropDown";

let Currency = (props) => {
  let [onMouse, ChangeMouseSettings] = useState(false);
  let onMouseFunk = () => {
    return ChangeMouseSettings(true);
  };
  let ofMouseFunc = () => {
    return ChangeMouseSettings(false);
  };
  debugger;
  return (
    <div onMouseEnter={onMouseFunk} onMouseLeave={ofMouseFunc}>
      {props.CurencyActivItem}
      {onMouse ? <CurrencyDropDown {...props} /> : null}
    </div>
  );
};
export default Currency;
