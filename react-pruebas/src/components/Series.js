// Fichero src/components/App.js
import { useState } from "react";

const Series = () => {
  const favoriteSeries = [
    { id: "123", isFavorite: false, name: "Juego de tronos" },
    { id: "456", isFavorite: false, name: "Las chicas Gilmore" },
    { id: "678", isFavorite: false, name: "Gambita de Dama" },
  ];
  // Crearmos las series en el estado indicando el array inicial
  const [series, setSeries] = useState(favoriteSeries);
  const [searchName, setSearchName] = useState("");
  const [searchIsFavorite, setSearchIsFavorite] = useState(false);

  // Función manejadora que se ejecuta cuando la usuaria pulsa en una serie
  const handleFavorite = (ev) => {
    // Obtenemos el id de la serie pintada. Este id lo estamos renderizando dentro del map
    // Por cierto aquí solo puedo usar currentTarget y no target porque quiero leer el id de li escuchado
    const clickedSerieId = ev.currentTarget.id;
    // Buscamos la serie pulsada
    const foundSerie = series.find((serie) => serie.id === clickedSerieId);
    // Invertimos la propiedad de serie pintada, si antes era false ahora es true y viceversa
    foundSerie.isFavorite = !foundSerie.isFavorite;
    // Guardamos las series en el estado usando spread (lo explicamos más abajo)
    setSeries([...series]);
  };

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };
  const handleSearchIsFavorite = (ev) => {
    setSearchIsFavorite(ev.target.checked);
  };

  //funciones de renderizado
  const renderSeries = () => {
    return (
      series
        .filter((serie) => {
          return serie.name.toLowerCase().includes(searchName.toLowerCase());
        })
        .filter((serie) => {
          if (searchIsFavorite === true) {
            return serie.isFavorite === true;
          } else {
            return true;
          }
        })
        //mapeamos
        .map((serie) => {
          return (
            // Renderizamos cada serie añdiendo el atributo id
            <li key={serie.id} id={serie.id} onClick={handleFavorite}>
              <h2>{serie.name}</h2>
              {/* Pintamos si cada serie es favorita usando el atributo isFavorite */}
              <p>Es mi serie favorita: {serie.isFavorite ? "Sí" : "No"}</p>
            </li>
          );
        })
    );
  };

  return (
    <div>
      <h1>Lista de series favoritas:</h1>
      <ul>{renderSeries()}</ul>
      <form>
        <label htmlFor="searchName">Buscar por nombre de serie</label>
        <input
          type="text"
          id="searchName"
          value={searchName}
          onChange={handleSearchName}
        />
        <br />
        <label htmlFor="searchIsFavorite">Mostrar solo las favoritas</label>
        <input
          type="checkbox"
          id="searchIsFavorite"
          checked={searchIsFavorite}
          onChange={handleSearchIsFavorite}
        />
      </form>
    </div>
  );
};

export default Series;
