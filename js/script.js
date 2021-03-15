
/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:

con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
*/

// Array contenente numeri generati
var computerNumbers = [];



// Genero i 16 numeri da 1 a 100 (diversi tra loro)
while (computerNumbers.length < 16) {

    var casualNumber = getRnd(1, 100);
    if (computerNumbers.includes(casualNumber) == false) { // se numero rnd generato non è presente nell'array
        computerNumbers.push(casualNumber); // pusho numero rnd nell'array
    }
}
console.log(computerNumbers);






// FUNZIONI

// Generatore numeri RND
function getRnd(min, max) {
    var minRnd = min;
    var maxRnd= max - minRnd + 1;
    var rnd = Math.floor(Math.random() * maxRnd) +minRnd;
    return rnd;
}
//getRnd(min, max);



