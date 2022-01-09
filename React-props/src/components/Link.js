import React from "react";

const Link = (props) => {
  //   const openInNewTab = props.target === undefined ? "" : `${props.target}`;
  return (
    <li className={props.className}>
      <a
        title={props.title}
        className={props.className}
        href={props.href}
        target={props.target === undefined ? "" : `${props.target}`}
      >
        {props.text}
      </a>
    </li>
  );
};

export default Link;
