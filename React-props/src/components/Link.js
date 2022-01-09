import React from "react";

const Link = (props) => {
  return (
    <li className={props.className}>
      <a title={props.title} className={props.className} href={props.href}>
        {props.text}
      </a>
    </li>
  );
};

export default Link;
