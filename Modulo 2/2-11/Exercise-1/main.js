'use strict';
/*
la URL base del API: https://swapi.dev/api/
si necesita autenticación: no, open API.
método HTTP que deben usar las peticiones a este API: GET
URL para acceder a la info del personaje "Luke Skywalker": https://swapi.dev/api/people/1/
URL para acceder a la info de la película "A New Hope": https://swapi.dev/api/films/1/
a qué otros recursos puedo acceder desde el API además de personajes y pelis: people/1/ or planets/3/ or starships/9/
URL para acceder al listado de personajes, ¿está paginada? https://swapi.dev/api/people/?page=3
cómo puedo buscar personajes mediante la URL
Endpoints

/people/ -- get all the people resources
/people/:id/ -- get a specific people resource
/people/schema/ -- view the JSON schema for this resource

cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee: https://swapi.dev/api/planets/1/?format=wookiee

*/