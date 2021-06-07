'use strict';

const persons = [
    {
        name: 'María',
        surname: 'Pérez Sosa',
        phone: 654534529

    },
    {
        name: 'Lucía',
        surname: 'Santiago',
        phone: 655555555

    },
    {
        name: 'Pedro',
        surname: 'López',
        phone: 655555558

    }
];


const select = document.querySelector('.js-select');
const name = document.querySelector('.js-name');
const surname = document.querySelector('.js-surname');
const phone = document.querySelector('.js-phone');
const form = document.querySelector('.js-form');

//funcion que se encarga de recorrer el array y crear las options
function newOptions() {
for (const person of persons) {
    let name = person.name;
    const newOption = document.createElement('option');
    const newContentOp = document.createTextNode(name);
    newOption.appendChild(newContentOp);
    select.appendChild(newOption);
    //newOption.setAttribute()    

}
}
newOptions();

//funcion que se encarga de rellenar el formulario

function fillForm(ev) {
    const event: 
    console.log();
    if (persons.name === persons[0].name) {
        name.value = persons[0].name;
        surname.value = persons[0].surname;
        phone.value = persons[0].phone;

    } else if (persons.name === persons[1].name) {
        name.value = persons[1].name;
        surname.value = persons[1].surname;
        phone.value = persons[1].phone;
    } else {
        name.value = persons[2].name;
        surname.value = persons[2].surname;
        phone.value = persons[2].phone;
    }
}
form.addEventListener('change', fillForm);




