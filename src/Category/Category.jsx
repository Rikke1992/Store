import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Category.module.css";

let Category = (props) => {
  let category = props.Products[0].category;
  debugger;
  return (
    <div className={style.categoryWraper}>
      <div className={style.nameOfCategory}>{category.toUpperCase()}</div>
      <div className={style.category}>
        {props.Products.map((item) => {
          return (
            <div className={style.product}>
              <NavLink to={`/Category/${item.category}/${item.id}`}>
                <div className={style.categoryProductPhoto}>
                  <img src={item.gallery[0]}></img>
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
                <div className={style.prices}>
                  <h2>
                    {item.prices[props.indexCurrencyActiv].currency +
                      " " +
                      item.prices[props.indexCurrencyActiv].amount}
                  </h2>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Category;
