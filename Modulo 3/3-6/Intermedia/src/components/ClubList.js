import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const clubItems = props.list.map((item, index) => {
    return (
      <li>
        <Club club={item} />
      </li>
    );
  });
  return <ul></ul>;
};
export default ClubList;
