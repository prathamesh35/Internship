import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div style={{marginTop:'20px'}}>
        <div
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "5px",
            marginTop: "20px",
            border: "2px solid rgba(102, 255, 0, 0.727)",
            maxWidth: "600px",
            margin: "auto",
            backgroundColor: "#a9d89c",
          }}
        >
          <center>
            <h2>Counter: {this.state.count}</h2>
          </center>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              style={{ backgroundColor: "#0d6efd", color: "white",border:'none',borderRadius:'5px'}}
              onClick={this.handleIncrement}
            >
              Increment
            </button>
            <button
              style={{ backgroundColor: "#0d6efd", color: "white",border:'none',borderRadius:'5px'}}
              onClick={this.handleDecrement}
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
