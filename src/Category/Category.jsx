import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Category.module.css";

let Category = (props) => {
  return (
    <div className={style.category}>
      {props.Products.map((item) => {
        return (
          <NavLink to={`/Category/${item.category}/${item.id}`}>
            <div>
              <span>{item.name}</span>
            </div>
            <div>
              <span>{item.prices[0].amount}</span>
            </div>
            <div>
              <img src={item.gallery[0]}></img>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
export default Category;
