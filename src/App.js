import React, { Component } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Bootstrap from "./components/Bootstrap";
import FetchData from "./components/FetchData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchData />
      </div>
    );
  }
}

export default App;
