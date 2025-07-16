console.log("Hi try the Function");
/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?

*/


//se una parola è palindroma allora è uguale alla sua "inversa"
//mi creo una costante dove andrà inserità la parola da verifcare se è palindroma
let wordTest = "";

//faccio scegliere all'utente la parola da "testare"
wordTest = prompt("Inserisci una parola e io ti dico se è palindroma");

//per ovviare al problema della parola con lettere maiuscole o minuscole visto che dopo mettiamo strettamente
wordTest = wordTest.toLowerCase();
//creo una funzione che fa il revers di una parola appunto word -> è il mio parametro

function reversedWord(word) {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        const thisCharacter = word[i];
        reverseWord = reverseWord + thisCharacter;
    }
    //per ovviare al problema della parola con lettere maiuscole o minuscole visto che dopo mettiamo strettamente
    reverseWord = reverseWord.toLowerCase();
    return reverseWord
}

console.log(reversedWord(wordTest));


//se la parola e il suo contrario sono uguali strettamente allora la parola è palindroma altrimenti no

if (wordTest === reversedWord(wordTest)) {
    console.log(`la parola ${wordTest.toUpperCase()} è palindroma`);
} else {
    console.log(`la parola ${wordTest.toUpperCase()} NON è palindroma`);
}



// altro esercizio

/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?

*/
// faccio scegliere all'utente se vuole pari o dispari
const evenOddUser = (prompt("Scegli tra pari e dispari e scrivilo qui"));
console.log(evenOddUser);

// faccio scegliere all'utente che numero vuole tra 1 e 5
const numberUser = Number(prompt("Scegli un numero tra 1 e 5 e scrivilo qui"));
console.log(numberUser);


// creo le variabili per indicare tra che numeri creo il numero random 
const minRandom = 1;
const maxRandom = 5;

// funzione copiata da w3school per generare un numero a caso tra due numeri compresi
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//genero un numero a caso con la mia funzione e lo salvo in una costante

let numberPc = getRndInteger(minRandom, maxRandom);
console.log(numberPc);

//somma semplice tra i due numeri

let sumEasy = numberUser + numberPc;
console.log(sumEasy);

//creo una funzione per verificare se la somma è pari o dispari



