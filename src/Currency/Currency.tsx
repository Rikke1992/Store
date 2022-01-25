import React from "react";
import { useState } from "react";
import CurrencyDropDown from "./CurrencyDropDown";
import ButtonBottom from "./../Img/ButtonBottom.png";
import style from "./Currency.module.css";



export type PropsType = {
  ChangeCurrencyThunk: (currency: any) => void;
  CurencyActivItem: string;
  CurencyListArray: Array<string>;
  GetCurrencyThunk: (currency: any) => void;
  changeCurrencyFuncToProps: any;
  currencies: Array<string>;
};

let Currency: React.FC<PropsType> = (props) => {
  let [onMouse, ChangeMouseSettings] = useState(false);
  let onMouseFunk = () => {
    return ChangeMouseSettings(true);
  };
  let ofMouseFunc = () => {
    return ChangeMouseSettings(false);
  };
  return (
    <div
      onMouseEnter={onMouseFunk}
      onMouseLeave={ofMouseFunc}
      className={style.curencyContainer}
    >
      <span> {props.CurencyActivItem}</span>
      <img src={ButtonBottom}></img>
      {onMouse ? <CurrencyDropDown {...props} /> : null}
    </div>
  );
};
export default Currency;
