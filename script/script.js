"use strict"
console.clear();



const username = document.getElementById("username");
const kilometers = document.getElementById("kilometers");
const userAge = document.getElementById("userAge");
const genera = document.getElementById("genera");
const annulla = document.getElementById("annulla");


const nomePasseggero = document.getElementById("nome-passegero");
const offerta = document.getElementById("offerta");
const carrozza = document.getElementById("carrozza");
const codiceCp = document.getElementById("codice-cp");
const costoBiglietto = document.getElementById("costo-biglietto");


genera.addEventListener("click", function () {
    nomePasseggero.innerHTML = username.value;
    // console.log(username.value);
});

