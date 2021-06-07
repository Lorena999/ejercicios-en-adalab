import React from "react";

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      //let prevValue = prevState.counter;
      //let nextCounter = prevValue + 1;
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const sheeps = [];
    for (let i = 0; i < this.state.counter; i++) {
      sheeps.push(
        <img
          key={i}
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
