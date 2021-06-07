'use strict'

const button = document.querySelector(".button");

const getMovie = (event) => {
  event.preventDefault();
  const movies = [];
  const movie1 = document.querySelector(".movie1");
  const movie2 = document.querySelector(".movie2");
  const movie3 = document.querySelector(".movie3");
  movies [0] = movie1.value;
  movies [1] = movie2.value;
  movies [2] = movie3.value;
for (const movie of movies) {
  console.log(`A mí también me encantó ${movie}! Tenemos mucho en común, humana`);
}
};

button.addEventListener("click", getMovie);
