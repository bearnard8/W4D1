//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*let a = parseFloat(prompt("Dammi il primo numero"));
let b = parseFloat(prompt("Dammi il secondo numero"));

console.log(a);
console.log(b);

if (isNaN(a) || isNaN(b)) {
  window.alert("Uno dei due valori non é un numero");
}  else if (a > b) {
  window.alert("Il numero piú grande é il primo, " + a);
} else {
  window.alert("Il numero piú grande é il secondo, " + b);
}*/

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*let a = parseFloat(prompt("Dammi un numero"));

if (isNaN(a)) {
  window.alert("Il valore dato non é un numero");
} else if (a < 5){
  window.alert("Tiny");
} else if (a >= 5 && a < 10) {
  window.alert("Small");
} else if (a >= 10 && a < 15) {
  window.alert("Medium");
} else if (a >= 15 && a < 20) {
  window.alert("Large");
} else {
  window.alert("Huge");
}*/

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log(i);
}*/

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " é pari!");
  } else {
    console.log(i + " é dispari!");
  }
}*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* 
prendi numeri da prompt
controlla se a OR b é uguale a 8 -> console.log uno dei due numeri é pari a 8
altrimenti controlla se a+b === 8 -> console.log la somma dei due numeri é pari a 8
else niente 8 da queste parti
*/

/*let a = parseFloat(prompt("Dammi il primo numero"));
let b = parseFloat(prompt("Dammi il secondo numero"));

if (isNaN(a) || isNaN(b)) {
  window.alert("Uno dei due valori non é un numero");
} else if (a === 8 || b === 8) {
  window.alert("Uno dei due numeri é pari a 8");
} else if (a + b === 8) {
  window.alert("La somma dei due numeri é pari a 8");
} else if (a - b === 8) {
  window.alert("La sottrazione dei due numeri é pari a 8");
} else {
  window.alert("Niente 8 da queste parti...");
}*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* 
totalShoppingCart totale acquisto utente
se carrelo > 50 applicare spedizione gratuita -> console.log hai diritto alla spedizione gratuita, il totale é di ...
altrimenti -> console.log la spedizione costa 10e, il totale é ...
*/

/*let totalShoppingCart = 51;
let freeShipping = false;

if (totalShoppingCart > 50) {
  freeShipping = true;
  console.log("Hai diritto alla spedizione gratuita, il totale é " + totalShoppingCart);
} else {
  console.log ("La spedizione costa 10 euro, il totale é " + (totalShoppingCart + 10));
}*/


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*let totalShoppingCart = 40;
let freeShipping = false;

if (totalShoppingCart > 50) {
  freeShipping = true;
  console.log("BLACK FRIDAY! 20% di sconto e spedizione gratuita, il totale é " + ((totalShoppingCart*80)/100));
} else {
  console.log ("BLACK FRIDAY! 20% di sconto. La spedizione costa 10 euro, il totale é " + (((totalShoppingCart*80)/100) + 10));
}*/

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*let isMale = false;
let gender = isMale?"male":"female";
console.log(gender);*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e 
  se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*for (let i = 1; i <=100; i++) {
  if(i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}*/