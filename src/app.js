import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


let who = ['My theacher', 'My grandma', 'The mailman', 'My bird'];
let action = [' kicked me out', 'peed', 'crushed', 'broke'];
let what = ['of class', 'my phone', 'the car'];
let when = ['before starting the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function generarExcusaAleatoria() {
  

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

 
  return who[whoIndex] + action[actionIndex] + " " + what[whatIndex] + " " + when[whenIndex];
}



window.onload = function() {
 
  let elementoExcusa = document.getElementById("excuse");
  

  elementoExcusa.innerHTML = generarExcusaAleatoria();
};