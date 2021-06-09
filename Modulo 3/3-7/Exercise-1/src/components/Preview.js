import React from "react";

function Preview(props) {
  return (
    <section className="preview">
      <div className="preview__container">
        <h2 className="preview-name">{props.name}</h2>
        <p className="preview-description">{props.description}</p>
        <h4 className="preview-languaje">{props.language}</h4>
        <p className="preview-age">{props.age}</p>
        <p className="preview-genre">{props.genre}</p>
      </div>
    </section>
  );
}

export default Preview;
