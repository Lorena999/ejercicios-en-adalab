import React, { useState, useEffect } from "react";
import Api from "../services/ApiShows";
import ls from "../services/LocalStorage";
console.log(ls);

const Shows = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState(ls.get("search", ""));

  useEffect(() => {
    ls.set("search", search);
    Api(search).then((response) => {
      setShows(response);
    });
  }, [search]);
  console.log(shows);

  const handleSearchShow = (ev) => {
    const search = ev.target.value;
    setSearch(search);
  };
  const renderShows = () => {
    return shows.map((show, index) => {
      return (
        <li key={index}>
          <h2>Nombre: {show.name}</h2>
          <p>Idioma: {show.language}</p>
        </li>
      );
    });
  };

  return (
    <div>
      <h1>Busca tu serie favorita</h1>
      <form>
        <label htmlFor="search">Pon el título aquí</label>
        <input type="text" name="search" onChange={handleSearchShow} />
      </form>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default Shows;
