import React, { useState, useEffect } from "react";
import Api from "../services/ApiShows";

const Shows = () => {
  const [show, setShow] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    Api(search).then((response) => {
      setShow(response);
    });
  }, [search]);
  console.log(show);

  const handleSearchShow = (ev) => {
    const search = ev.target.value;
    setSearch(search);
  };

  return (
    <div>
      <h1>Busca tu serie favorita</h1>
      <form>
        <label htmlFor="search">Pon el título aquí</label>
        <input type="text" name="search" onChange={handleSearchShow} />
      </form>
    </div>
  );
};

export default Shows;
