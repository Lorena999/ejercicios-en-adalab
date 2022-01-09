import { useState } from "react";
import "../styles/App.scss";

function App() {
  const [searchName, setSearchName] = useState("");

  const [users, setUser] = useState([
    {
      name: "Lola Martinez",
      phone: 603256289,
      email: "lmartinez@adalab.es",
    },
    {
      name: "Martha Houston",
      phone: 603256290,
      email: "marta@adalab.es",
    },
    {
      name: "Lillie Moore",
      phone: 633256289,
      email: "lili@adalab.es",
    },
    {
      name: "Jane Norton",
      phone: 603256269,
      email: "jane@adalab.es",
    },
  ]);

  const handleFilterName = (ev) => {
    setSearchName(ev.target.value);
  };

  //   const handleName = (ev) => {
  //     users.name = ev.target.value;
  //     setUser({ ...users });
  //     console.log(users);
  //   };
  // //
  const renderContacts = () => {
    return users
      .filter((user) => {
        return user.name
          .toLocaleLowerCase()
          .includes(searchName.toLocaleLowerCase());
      })

      .map((user, index) => {
        return (
          <li className="contact__item" key={index}>
            <p className="contact__name">
              <label className="contact__label">Nombre:</label>
              {user.name}
            </p>
            <p className="contact__phone">
              <label className="contact__label">Teléfono:</label>
              <a href="tel:603256289" title="Pulsa aquí para llamar a Lola">
                {user.phone}
              </a>
            </p>
            <p className="contact__mail">
              <label className="contact__label">Email:</label>
              <a
                href="mailto:lmartinez@adalab.es"
                title="Pulsa aquí para escribir a Lola"
              >
                {user.email}
              </a>
            </p>
          </li>
        );
      });
  };
  return (
    <div className="page">
      {/* header */}
      <header className="header">
        <h1 className="header__title">Mi agenda de contactos</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder="Filtrar contactos por nombre"
            onChange={handleFilterName}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className="contact__list">{renderContacts()}</ul>

        {/* new contact */}
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
          />
          <input
            className="new-contact__input"
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Apellidos"
          />
          <input
            className="new-contact__input"
            type="phone"
            name="phone"
            id="phone"
            placeholder="Teléfono"
          />
          <input
            className="new-contact__input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input className="new-contact__btn" type="submit" value="Añadir" />
        </form>
      </main>
    </div>
  );
}

export default App;
