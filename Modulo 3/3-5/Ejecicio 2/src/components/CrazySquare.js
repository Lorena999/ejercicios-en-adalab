import React from "react";

class CrazySquare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { styling: "blue" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    this.setState((prevState, props) => {
      let nextStyling;
      if (prevState.styling === "blue") {
        nextStyling = "red";
      } else {
        nextStyling = "blue";
      }
      return {
        styling: nextStyling,
      };
    });
  }

  render() {
    const { styling } = this.state;
    return (
      <div
        className={`square square-${styling}`}
        onClick={this.handleClick}
      ></div>
    );
  }
}
export default CrazySquare;
