/* RICHESTA
-L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
-Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
-Sommiamo i due numeri
-Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
-Dichiariamo chi ha vinto. */

// Collego funzione da avviare quando si clicca sul pulsante GIOCA
let gioca = document.getElementById("richiestaGioca");
gioca.addEventListener("click", avviaGioco);

function avviaGioco() {
    
    // Chiedo a utente pari/dispari e numero da 1 a 5
    let sceltaPariDispari = document.getElementById("PariDispari").value;
    let numeroUtente = parseInt(document.getElementById("richiestaNumero").value);
    console.log(sceltaPariDispari, numeroUtente);
    document.getElementById("NumeroInseritoEPariODispari").innerHTML =
    `L'utente ha scelto ${sceltaPariDispari} e il numero ${numeroUtente}`;

    // Genero numero per PC sempre da 1 a 5
    let numeroPC = generatoreNumero(1, 5);
    console.log(numeroPC);
    document.getElementById("NumeroPC").innerHTML =
    `Il numero scelto a caso per il PC è ${numeroPC}`;


    // Sommo numero scelto da utente e numero generato per PC
    let sommaNumeri = somma(numeroUtente, numeroPC);
    console.log("la somma è:", sommaNumeri);
    document.getElementById("somma").innerHTML =
    `La somma è ${sommaNumeri}`;

    // Calcolo se somma è pari o dispari
    let risultato = calcoloRisultato(sommaNumeri);
    document.getElementById("esitoparidispari").innerHTML =
    `${sommaNumeri} è un numero ${risultato}`;

    // Calcolo esito partita
    let esito = calcoloVincitore(sceltaPariDispari);
    document.getElementById("esito").innerHTML =
    `${esito}`;





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
            esitoFinale = "Ha vinto l'UTENTE";
            console.log("Ha vinto l'UTENTE");
        } else {
            esitoFinale = "Ha vinto il PC";
            console.log("Ha vinto il PC");
        }

        return esitoFinale;
    }

}

