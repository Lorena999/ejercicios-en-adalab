import React from "react";

const client = {
  firstName: "Ada",
  lastName: "Lovelace",
  birthDate: {
    day: 10,
    month: "diciembre",
    year: 1815,
  },
};

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
    const sheeps = [];
    for (let i = 0; i < this.state.counter; i++) {
      sheeps.push(
        <img
          width="40px"
          src="http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png"
          alt="sheep-icon"
        />
      );
    }

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <div>{sheeps}</div>
        <button className="quantity" onClick={this.handleClick}>
          Agrega ovejas
        </button>
      </div>
    );
  }
}
export default SheepCounter;
