
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


function campoMinato() {

    var computerNumbers = [];

// Genero 16 numeri rnd compresi tra 1 e 100

    while (computerNumbers.length < 16) {

        var rndNum = getRnd(1, 100);                        // genera numero rnd
        var isThere = elemInArr(computerNumbers, rndNum);   // numero rnd presente in computerNumbers
        if (isThere == false) {                             // se il numero rnd non è presente
            computerNumbers.push(rndNum);                   // pusha il num° rnd generato, nell'array del computer
        }
    }
    console.log('Numeri rnd Computer: ' + computerNumbers);
    document.getElementById('elenco-numeri').innerHTML = computerNumbers;


// Numeri inseriti dall' Utente (tra 1 e 100, max 84 tentativi)

    var userNumbers = [];
    var maxUserValue = 84;
    var score = 0;          // punteggio iniziale
    var mine = false;

    while (userNumbers.length < maxUserValue && mine == false) {

        var myNumber = parseInt(prompt('Inserisci un numero: '));
        rightNumbers(); // "alert" se input errato

        if (elemInArr(userNumbers, myNumber) == false) {         // num. non è nell'array computer
            userNumbers.push(myNumber);

            if (elemInArr(computerNumbers, myNumber) == true) {  // num è nell'array computer
                console.log('Partita terminata!');
                document.getElementById('end-game').innerHTML = 'Partita terminata, hai perso!';
                mine = true;
            } else {
                score++;    // incrementa il punteggio
             }
        }
    }
    console.log('Numero già presente nell array: ' + mine);
    console.log('Punteggio ottenuto: ' + score);
    document.getElementById('final-score').innerHTML = 'Punteggio ottenuto: ' + score;

    if (userNumbers.length == maxUserValue) {
        console.log('Hai vinto!');
        document.getElementById('won-game').innerHTML = 'Hai vinto!';
    }


// FUNZIONI

    // Generatore numeri RND
    function getRnd(min, max) {
        var minRnd = min;
        var maxRnd= max - minRnd + 1;
        var rnd = Math.floor(Math.random() * maxRnd) + minRnd;
        return rnd;
    }

    // Elemento presente in un array
    function elemInArr(arr, elem) {
        var i = 0;
        var res = false;
        while (i < arr.length && res == false) {
            if (arr[i] == elem) {
                res = true;
            }
            i++;
        }
        return res;
    }

    // Numero tra un valore Min e un valore Max
    function rangeNumber(min, max, num) {
        var res = false;
        if (num >= min && num <= max) {
            res = true;
        }
        return res;
    }

    // Messaggio "errore" se input non compreso tra min e max
    function rightNumbers() {
        while (rangeNumber(1, 100, myNumber) == false) {    // myNumber non è presente tra min e max
            myNumber = parseInt(prompt('Input errato! inserisci un numero tra 1 e 100: '));
        }
    }

}
campoMinato();
