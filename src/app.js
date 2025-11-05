import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['My theacher', 'My grandma', 'The mailman', 'My bird'];
let action = ['kicked me out', 'peed', 'crushed', 'broke']; 
let what = ['of class', 'my phone', 'the car'];
let when = ['before starting the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function obtenerElementoAleatorio(lista) {
  let indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}

function generarExcusaAleatoria() {
    let sujeto = obtenerElementoAleatorio(who);
    let accion = obtenerElementoAleatorio(action);
    let objeto = obtenerElementoAleatorio(what);
    let momento = obtenerElementoAleatorio(when);

 
    return sujeto + " " + accion + " " + objeto + " " + momento;
}


window.onload = function() {
    let elementoExcusa = document.getElementById("excuse");
    elementoExcusa.innerHTML = generarExcusaAleatoria();
};