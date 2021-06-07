import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const clubItems = props.list.map((item, index) => {
    return (
      <li key={index}>
        <Club club={item} />
      </li>
    );
  });
  return <ul>{clubItems}</ul>;
};
export default ClubList;
