import React from "react";

function Preview(props) {
  return (
    <section className="preview">
      <div className="preview__container">
        <h2 className="preview-name">{props.name}</h2>
        <p className="preview-description">{props.description}</p>
        <h4 className="preview-languaje">{props.language}</h4>
      </div>
    </section>
  );
}

export default Preview;
