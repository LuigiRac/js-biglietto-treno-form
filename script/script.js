"use strict"
console.clear();

const priceKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;

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

let discountTicket = 0;

genera.addEventListener("click", function () {
    nomePasseggero.innerHTML = username.value;
    // console.log(username.value);
    const valueKm = parseFloat(kilometers.value);

    const userAgeValue = userAge.value;
    const ticketPrice = priceKm * valueKm;
    // console.log(ticketPrice);
    if (userAgeValue == "minorenne") {
        discountTicket = ticketPrice * discountJunior;
    } else if (userAgeValue == "maggiorenne") {
        discountTicket = 0;
    } else if (userAgeValue == "over") {
        discountTicket = ticketPrice * discountSenior;
    }
});


