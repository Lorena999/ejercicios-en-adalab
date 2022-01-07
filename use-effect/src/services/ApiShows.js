import React from "react";

const ApiShows = (search) => {
  return fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    .then((response) => response.json())
    .then((response) => {
      const result = response.map((show) => {
        return {
          name: show.show.name,
        };
      });
      return result;
    });
};

export default ApiShows;
