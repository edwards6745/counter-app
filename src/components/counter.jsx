import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
      console.log("Ajax call can go here.");
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter - Rendered");
    return (
      <div className="div-table-row">
        <div className="div-table-col">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="div-table-col">
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-light btn-sm"
          >
            -
          </button>
          {"  "}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-light btn-sm"
          >
            +
          </button>
        </div>

        <div className="div-table-col">
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
