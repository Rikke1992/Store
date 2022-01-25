import React from "react";
import style from "./../Currency/Currency.module.css";
import { PropsType } from "./Currency";

let CurrencyDropDown: React.FC<PropsType> = (props) => {
  let changeCyrrency = (e: any) => {
    return props.changeCurrencyFuncToProps(e.target.innerText);
  };
  return (
    <div className={style.currencyDropDown}>
      {props.CurencyListArray.map((item) => {
        return (
          <div
            className={
              props.CurencyActivItem === item ? style.activ : style.nonActiv
            }
            onClick={changeCyrrency}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
export default CurrencyDropDown;
