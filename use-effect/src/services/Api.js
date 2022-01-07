import React from "react";

const callToApi = () => {
  return fetch("https://api.tvmaze.com/search/shows?q=paranormal")
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((show) => {
        return {
          name: show.show.name,
        };
      });

      return data;
    });
};

export default callToApi;
