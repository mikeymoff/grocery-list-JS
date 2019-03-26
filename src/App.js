import React, { Component } from "react";
import "./App.css";
import GroceryList from "./components/GroceryList";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <GroceryList />
      </div>
    );
  }
}

export default App;