import style from "./App.module.css";
import Menu from "./Menu/menu";
import React from "react";
import Wraper from "./Wraper";
import { DropDownCheckSelector } from "./Selectors/CartSelector";
import blure from "./Img/bgImageBlure.png";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className={style.APP}>
        <Menu />
        {this.props.DropDownCartCheck ? (
          <div className={style.appBlureDisplay}>
            <img src={blure}></img>
          </div>
        ) : null}
        <Wraper />
      </div>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    DropDownCartCheck: DropDownCheckSelector(state),
  };
};
export default connect(MapStateToProps, {})(App);
