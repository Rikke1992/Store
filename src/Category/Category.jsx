import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Category.module.css";

class Category extends React.Component {
  render() {
    return (
      <div className={style.category}>
        {this.props.products.map((item) => {
          return (
            <NavLink to={`/Category/${this.props.category}/${item.id}`}>
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
  }
}

export default Category;
