import React from "react";

const InputGroupText = (props) => {
  const handleInputChange = (ev) => {
    props.handleChange(ev.target.value);
  };
  return (
    <div className="input-group-text">
      <label className="label-text" htmlFor="name">
        {props.labeltext}
      </label>
      <input
        className="input-text"
        type="text"
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.name}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputGroupText;
