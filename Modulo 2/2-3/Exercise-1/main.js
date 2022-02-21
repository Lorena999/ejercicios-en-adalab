"use strict";
const userImg = document.querySelector(".user__avatar");

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "";

//userAvatar = 'http://www.fillmurray.com/300/300';

//userImg.src =  `${userAvatar || DEFAULT_AVATAR}`;
userImg.src = `${userAvatar || DEFAULT_AVATAR}`;
// userImg.src = `${userAvatar || DEFAULT_AVATAR}`;
