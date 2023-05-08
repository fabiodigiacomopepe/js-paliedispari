/* RICHIESTA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */


// Definisco in una costante il pulsante CONTROLLA
const controlla = document.getElementById("richiestaControllo");

// Lego al pulsante CONTROLLA una FUNZIONE che deve essere eseguita al CLICK
controlla.addEventListener("click", controllaTutto);

// FUNZIONE che deve essere eseguita al CLICK
function controllaTutto() {

    // Prendo valore inserito da utente dentro INPUT
    const parolaRichiesta = document.getElementById("richiestaParola").value;
    console.log("La parola inserita dall'utente è:", parolaRichiesta);
    
    // Rendo "parolaRichiestaInvertita" il RISULTATO della funzione "invertiParola"
    let parolaRichiestaInvertita = invertiParola(parolaRichiesta);

    if (parolaRichiesta === parolaRichiestaInvertita){   // SE uguale
        console.log('La parola è palindroma');
    } else {                                             // ALTRIMENTI
        console.log('La parola NON è palindroma');
    }

    // Funzione "invertiParola"
    function invertiParola(parolaDaInvertire) {
        
        // FORMULA COMPLETA
        /*
        // Scompongo la parola richiesta in singole lettere
        let parolaRichiestaDivisa = parolaDaInvertire.split('');
        console.log(parolaRichiestaDivisa);

        // Ribalto ordine lettere
        parolaRichiestaDivisa = parolaRichiestaDivisa.reverse();
        console.log(parolaRichiestaDivisa);

        // Ricompongo la parola con le lettere invertite
        let parolaInvertita = parolaRichiestaDivisa.join('');
        console.log("La parola, invertita, è:", parolaInvertita);
        */


        // FORMULA ABBREVIATA
        let parolaInvertita = parolaDaInvertire.split("").reverse().join("");
        console.log("La parola, invertita, è:", parolaInvertita);

        return parolaInvertita;

    }

}

