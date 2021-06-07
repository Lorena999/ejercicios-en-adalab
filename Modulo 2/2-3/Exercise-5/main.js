'use strict'

const message = document.querySelector('.js-success');
const titleMessage = document.querySelector('.title-menssage');
const textMessage = document.querySelector('.text-menssage');

if (message.classList.contains('warning')) {
  titleMessage.innerHTML = 'AVISO';
  textMessage.innerHTML = 'Tenga cuidado';
} else if (message.classList.contains('error')) {
  titleMessage.innerHTML = 'ERROR';
  textMessage.innerHTML = 'Ha surgido un error';
} else if (message.classList.contains('success')) {
  titleMessage.innerHTML = 'CORRECTO';
  textMessage.innerHTML = 'Los datos son correctos';
}


