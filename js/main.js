/* RICHIESTA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */



// Chiedo la parola all'utente
const parolaRichiesta = prompt("Inserisci una parola");
console.log("La parola inserita dall'utente è:", parolaRichiesta);

// RISOLUZIONE ESERCIZIO SENZA FUNCTION
/*
// Scompongo la parola richiesta in singole lettere
let parolaRichiestaDivisa = parolaRichiesta.split('');
console.log(parolaRichiestaDivisa);

// Ribalto ordine lettere
parolaRichiestaDivisa = parolaRichiestaDivisa.reverse();
console.log(parolaRichiestaDivisa);

// Ricompongo la parola con le lettere invertite
let parolaRichiestaInvertita = parolaRichiestaDivisa.join('');
console.log("La parola, invertita, è:", parolaRichiestaInvertita);

// Confronto
if (parolaRichiesta === parolaRichiestaInvertita){   // SE uguale
    console.log('La parola è palindroma');
  } else {                                           // ALTRIMENTI
    console.log('La parola NON è palindroma');
  }
*/



// RISOLUZIONE ESERCIZIO CON FUNCTION

// Rendo "parolaRichiestaInvertita" il RISULTATO della funzione "invertiParola"
let parolaRichiestaInvertita = invertiParola(parolaRichiesta);

if (parolaRichiesta === parolaRichiestaInvertita){   // SE uguale
    console.log('La parola è palindroma');
  } else {                                           // ALTRIMENTI
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