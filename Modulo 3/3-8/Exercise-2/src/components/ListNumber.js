import React from "react";

const ListNumber = (props) => {
  const numbersItems = props.numbers.map((number, index) => {
    return <li key={index}>{number}</li>;
  });
  return <ul className="list">{numbersItems}</ul>;
};
export default ListNumber;
