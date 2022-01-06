import React, { useState } from "react";

const SeriesB = () => {
  const [series, setSeries] = useState([
    { id: "123", name: "Juego de tronos" },
    { id: "456", name: "Las chicas Gilmore" },
    { id: "678", name: "Gambita de Dama" },
  ]);
  const [favorites, setFavorites] = useState([]);
  const handleFavoriteSerieId = (ev) => {
    const favoriteId = ev.currentTarget.id;
    let favoriteSerie = series.filter((serie) => {
      return serie.id === favoriteId;
    });
    favoriteSerie = favorites.push(...favoriteSerie);
    setFavorites([...favorites]);
    console.log(favorites);
  };

  const renderSeries = () => {
    return;

    series.map((serie) => {
      return (
        <li key={serie.id} id={serie.id}>
          <p>{serie.name}</p>
        </li>
      );
      favorites.map((favorite) => {
        return (
          <li key={favorite.id} onClick={handleFavoriteSerieId}>
            <h2>Tus series favoritas son: </h2>
            {favorite.name}
          </li>
        );
      });
    });
  };

  return (
    <div>
      <h1>Clica en tus series favoritas</h1>
      <ul>{renderSeries()}</ul>
    </div>
  );
};

export default SeriesB;
