import React from "react";

const InputGroupText = (props) => {
  const handleInputName = (ev) => {
    props.handleChange(ev.target.value);
  };
  const handleEmailValue = (ev) => {
    props.handleEmail(ev.target.value);
  };
  return (
    <>
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
          onChange={handleInputName}
        />
      </div>
      <div className="input-group-text">
        <label className="label-text" htmlFor="email">
          Escribe tu email:
        </label>
        <input
          className="input-text"
          type="email"
          name={props.email}
          id={props.email}
          placeholder="mariagarcia@gmail.com"
          value={props.email}
          onChange={handleEmailValue}
        />
      </div>
    </>
  );
};

export default InputGroupText;
