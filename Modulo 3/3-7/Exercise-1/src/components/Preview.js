import React from "react";

function Preview(props) {
  return (
    <section className="preview">
      <div className="preview__container">
        <h2
          className="preview__card-data--name js-name"
          handleChange={props.handleChange}
        >
          {props.name}
        </h2>
        <p handleChange={props.handleChange}>{props.description}</p>
        <h4>{props.language}</h4>
      </div>
    </section>
  );
}

export default Preview;
