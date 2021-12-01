import "./App.css";
import Menu from "./Menu/menu";
import React from "react";
import Wraper from "./Wraper";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Wraper />
      </div>
    );
  }
}

export default App;
