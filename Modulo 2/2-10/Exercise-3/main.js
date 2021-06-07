'use strict';

//const input = document.querySelector(".js-input")
const btn = document.querySelector(".js-user");
const repos = document.querySelector(".js-repos");
const img = document.querySelector(".js-photo");
const nam = document.querySelector(".js-name");
const text = document.querySelector(".js-text");

function getUserGitH(event) {
  event.preventDefault();
  fetch(`https://api.github.com/users/${text.value}`)
    .then((response) => response.json())
    .then((data) => {
      nam.innerHTML += data.name;
      repos.innerHTML += data.public_repos;
      img.src = data.avatar_url;
      img.alt = "Usuario GitHub";
    });
}
btn.addEventListener("click", getUserGitH);

/* 
- dónde está el método de petición: XHR > Headers > Request method: GET
- el código de la respuesta (recuerda que 200 es OK): Status Code: 200 
- en las cabeceras de la petición busca una llamada user-agent, ¿qué puedes decir de su contenido?
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36

- la respuesta del servidor en JSON
content-type: application/json

- al recargar la página aparecen un montón de peticiones en la pestaña Network, ¿sabrías filtrar solo las que son de AJAX? Pista: antes de fetch las peticiones se hacían con el objeto XMLHttpRequest (XHR)

