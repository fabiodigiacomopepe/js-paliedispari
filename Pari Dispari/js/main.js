/* RICHESTA
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto. */

// Chiedo a utente pari/dispari e numero da 1 a 5
let sceltaPariDispari = prompt("Pari o Dispari?");
let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log(sceltaPariDispari, numeroUtente);

// Genero numero per PC sempre da 1 a 5
let numeroPC = generatoreNumero(1, 5);
console.log(numeroPC);

// Sommo numero scelto da utente e numero generato per PC
let sommaNumeri = somma(numeroUtente, numeroPC);
console.log("la somma è:", sommaNumeri);

// Calcolo se somma è pari o dispari
let risultato = calcoloRisultato(sommaNumeri);

// Calcolo esito partita
let esito = calcoloVincitore(sceltaPariDispari);

// Generatore numero per PC
function generatoreNumero(min, max) {
    return Math.floor(Math.random() * max ) + min;
  }

// Sommatore numero scelto da utente e numero generato per PC
function somma(val1, val2) {
    return parseInt(val1 + val2);
}

// Calcolatore se somma è pari o dispari
function calcoloRisultato(valoreX) {
    if (valoreX % 2 === 0) {
        risul = "pari";
        console.log(risul);
    } else {
        risul = "dispari";
        console.log(risul);
    }

    return risul;
}

// Calcolatore esito partita
function calcoloVincitore(sceltaUtente) {
    if (sceltaUtente == risultato) {
        console.log("Ha vinto l'UTENTE");
    } else {
        console.log("Ha vinto il PC");
    }
}