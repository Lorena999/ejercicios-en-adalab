import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);

    let height = 0;
    if (this.props.height == null) {
      height = 600;
    } else {
      height = this.props.height;
    }

    return (
      <a href="https://lorempixel.com">
        <img
          src={`http:s//lorempixel.com/400/200/cats/${randomCat}`}
          alt="Random cat"
          width={this.props.width === null ? 600 : this.props.width}
          height={height}
        />
      </a>
    );
  }
}

export default RandomCat;
