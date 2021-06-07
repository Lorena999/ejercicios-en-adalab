'use strict';

function getAllBreeds () {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(breedsData => {
      const breeds = Object.keys(breedsData.message);
      return fetch 
    })
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getAllBreeds);

/*function getBreedsImage () {
  fetch('https://dog.ceo/api/breeds/list')
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
      const breeds = breedsData.message;
      console.log(breeds);
      return fetch('https://dog.ceo/api/breed/' + breeds[0] + '/images/random');
    })
    .then(imageResponse => imageResponse.json())
    .then(imageData => {
      const img = document.querySelector('img');
      img.src = imageData.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedsImage);*/

/*const btn = document.querySelector(".js-user");
const org = document.querySelector(".js-text");


function getUserGitH(event) {
  event.preventDefault();
  fetch(`https://api.github.com/orgs/${org.value}`)
    .then((response) => response.json())
    .then((reposData) => {
      const reposOrg = reposData.repos_url;
      document.body.innerHTML = `<h1>Repositorios de ${org.value}: </h1>`;
      return fetch (`https://api.github.com/orgs/${org.value}/repos`)
    })
    .then((repoResponse) => repoResponse.json())
    .then((reposName) => {
      const repo = reposName.name;
      for (const repo of reposName) {
        document.body.innerHTML += `<ul><li>${repo.name}</li></ul>`;
      }
    });

}
btn.addEventListener("click", getUserGitH);
*/
