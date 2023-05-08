/* RICHIESTA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

// Chiedo la parola all'utente
const parolaRichiesta = prompt("Inserisci una parola");
console.log(parolaRichiesta);

// Scompongo la parola richiesta in singole lettere
let parolaRichiestaDivisa = parolaRichiesta.split('');
console.log(parolaRichiestaDivisa);

// Ribalto ordine lettere
parolaRichiestaDivisa = parolaRichiestaDivisa.reverse();
console.log(parolaRichiestaDivisa);

// Ricompongo la parola con le lettere invertite
let parolaRichiestaInvertita = parolaRichiestaDivisa.join('');
console.log(parolaRichiestaInvertita);

// Confronto
if (parolaRichiesta === parolaRichiestaInvertita){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }