import React from "react";
import Spiner from "./Spinner-1s-200px.gif";
import style from "./preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <div>
        <img src={Spiner} alt="LOADING"></img>
      </div>
    </div>
  );
};
export default Preloader;
