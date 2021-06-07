'use strict';


const btn = document.querySelector('.js-btn');

function handlerClic (event) {
    event.preventDefault();
    const search = document.querySelector('.js-text').value;
//el valor del input lo pongo como parte de la url de búsqueda
fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((response) => response.json())
    .then((searchData) => {
        //guardo la lista de personales que me devuelve
        const listResult = searchData.results;
        //tengo que guardar los resultados obtenidos en una lista
        const listPeople = document.querySelector('.js-people-list');
        let people = '';
        for (let i = 0; i<listResult.length; i++ ) {
            const name = listResult[0].name;
            const gender = listResult[0].gender;

            listPeople.innerHTML = `<li>El nombre del personaje es ${name} y su sexo es ${gender}</li>`;
        }
        //listPeople.innerHTML = people;

    });
}
btn.addEventListener('click', handlerClic);