'use strict'

const teachers = document.querySelector('.teachers');
const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
const favorite = teachers.querySelector('.favorite');



function teacherClick (event) {
    const selectedTeacher = event.currentTarget;
    selectedTeacher.classList.toggle('teacher--selected');
   if (favorite.innerHTML === "Añadir") {
       const add = favorite.innerHTML.replace("Añadir", "Quitar");
       favorite.innerHTML = add;
   }else {
        const remove = favorite.innerHTML.replace("Quitar", "Añadir");
        favorite.innerHTML = remove;
   }

}
isra.addEventListener('click', teacherClick);
tuerto.addEventListener('click', teacherClick);
nasi.addEventListener('click', teacherClick);
