import { useState } from "react";

const State = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (ev) => {
    ev.preventDefault();
    const inputValue = ev.target.value;
    setEmail(inputValue);
  };
  return (
    <div>
      <h1 className="title">Generador de emails</h1>
      <form>
        <label className="form__label">Escribe tu email</label>
        <input
          onChange={handleEmail}
          type="email"
          className="form__email"
          name="name"
        />
      </form>
      <p>Tu email es {email}</p>
      <p>
        Pulsa en <a href={`mailto:${email}`}>{email}</a>
      </p>
    </div>
  );
};
export default State;
