import { useState } from "react";
const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [size, setSize] = useState("S");
  const [by, setBy] = useState(false);

  const handleInput = (ev) => {
    ev.preventDefault();
    setName(ev.target.value);
    setEmail(ev.target.value);
    setAge(ev.target.value);
  };
  const sizeInput = (ev) => {
    setSize(ev.target.value);
  };
  const handleByNow = (ev) => {
    setBy(ev.target.checked);
  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    //función enviar
  };
  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleInput}>
        <label htmlFor="name">Escribe un nombre: </label>
        <input type="name" name="name" id="name" placeholder="María García" />
        <label htmlFor="email">Tu email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="ejemplo@email.com"
        />
        <label htmlFor="age">Tu edad: </label>
        <input type="number" id="age" name="age" />
      </form>
      <p>
        Tu nombre es {name}, tu email {email} y tienes {age} años
      </p>
      <select name="size" id="size" onChange={sizeInput}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
      <p>Tu talla es {size}</p>

      <label htmlFor="byNow">¿Do you want by now?</label>
      <input type="checkbox" name="byNow" id="byNow" onChange={handleByNow} />
      <p>{by === true ? "Sí" : "No"} te lo envolvemos para regalo</p>
      <label htmlFor="sizeS">Size S</label>
      <input
        type="radio"
        name="size"
        id="sizeS"
        value="S"
        onChange={sizeInput}
      />
      <label htmlFor="sizeS">Size M</label>
      <input
        type="radio"
        name="size"
        id="sizeM"
        value="M"
        onChange={sizeInput}
      />
      <label htmlFor="sizeS">Size L</label>
      <input
        type="radio"
        name="size"
        id="sizeL"
        value="L"
        onChange={sizeInput}
      />
      <p>Tu talla de camiseta es {size}</p>

      <input type="submit" value="Enviar" />
    </div>
  );
};

export default Form;
