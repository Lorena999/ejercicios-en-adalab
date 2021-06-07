import React from "react";

function Club() {
  return (
    <li className="box__card">
      <i className={`box__card-icon ${club.fa}`}></i>
      <h2 className="box__card-title">{club.name}</h2>
      <ul>
        <h3>Members</h3>
        <li>{club.members}</li>
      </ul>
    </li>
  );
}

export default Club;
