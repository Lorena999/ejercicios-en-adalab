import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleInput = (ev) => {
    setName(ev.target.value);
    setEmail(ev.target.value);
    setAge(ev.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Escribe un nombre: </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="María García"
          onChange={handleInput}
        />
        <label htmlFor="email">Tu email: </label>
        <input
          type="email"
          id="email"
          placeholder="ejemplo@email.com"
          onChange={handleInput}
        />
        <label htmlFor="age">Tu edad: </label>
        <input type="number" id="age" onChange={handleInput} />
      </form>
      <p>
        Tu nombre es {name}, tu email {email} y tienes {age} años
      </p>
    </div>
  );
};

export default Form;
