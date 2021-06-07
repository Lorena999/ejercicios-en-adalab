import React from "react";

const Club = (props) => {
  const members = props.club.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });

  return (
    <article className="box__card">
      <i className={`box__card-icon ${props.club.fa}`}></i>
      <h2 className="box__card-title">{props.club.name}</h2>
      <h3>Members</h3>
      <ul>{members}</ul>
    </article>
  );
};

export default Club;
