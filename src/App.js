import "./App.css";
import Menu from "./Menu/menu";
import React from "react";
import Wraper from "./Wraper";
import { Query } from "./Query/Query";

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
