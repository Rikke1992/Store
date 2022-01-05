import "./App.css";
import Menu from "./Menu/menu";
import React from "react";
import Wraper from "./Wraper";
import { Query } from "./Query/Query";
import Preloader from "./Preloader/Preloader";

class App extends React.Component {
  render() {
    return (
      <div className="APP">
        <Menu />
        <Wraper />
      </div>
    );
  }
}

export default App;
