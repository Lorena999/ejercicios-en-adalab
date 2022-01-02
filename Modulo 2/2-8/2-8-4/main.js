"use strict";

const list = document.querySelector(".js-list-act");
const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

function paintList() {
  let html = "";
  let className = "";
  for (let i = 0; i < tasks.length; i++) {
    let tasks = tasks[i];
    if (tasks.completed === true) {
      className = "complete";
    } else {
      className = "";
    }
    html += `<li class = "${className}"> <input type= "checkbox" value= "${i}" /> ${task.name} </li>`;
  }
  list.innerHTML = html;
}
paintList();

/*const act1 = tasks[0].name;
const act2 = tasks[1].name;
const act3 = tasks[2].name;
const act4 = tasks[3].name;
const completed = tasks[0].completed;



let inbox = `<input type="checkbox" name="inputcheckbox"/>`;
const checked = inbox.name;
console.log(tasks[3].completed);

list.innerHTML = `<li> ${act1} ${inbox} </li><li> ${act2} ${inbox} </li><li> ${act3} ${inbox} </li></li><li> ${act4} ${inbox} </li>`;
//list.classList.add('complete');

if (tasks[i].completed === true) {
    classList.add('complete');
    
}

function handleList() {
for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
        list.classList.add('complete');
    }
}
}
list.addEventListener('click', handleList); */
