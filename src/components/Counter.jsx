import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="counter_box">
        <p>{this.props.data.count}</p>
        <button className="btn deccress" onClick={()=>{this.props.deccrement(this.props.data.id, this.props.data.count, this.props.data.steps)}}>
          -
        </button>
        <button className="btn inccress" onClick={()=>{this.props.inccrement(this.props.data.id, this.props.data.steps)}}>
          +
        </button>
      </div>
    );
  }
}
