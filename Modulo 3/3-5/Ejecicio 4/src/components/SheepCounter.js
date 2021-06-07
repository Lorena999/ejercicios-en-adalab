import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.setState((prevState, props) => {
      let prevValue = prevState.counter;
      let nextCounter = prevValue + 1;
      return {
        counter: nextCounter,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button className="quantity" onClick={this.handleClick}>
          Agrega ovejas
        </button>
      </div>
    );
  }
}
export default SheepCounter;
