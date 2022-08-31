// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");


// ******** CONSEGNA ********

/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// Chiedere all’utente di inserire una parola
let word;
word = prompt("Inserisci una parola!");
console.log("Parola inserita: "+ word);
// La parola inserita è palindroma?
isPalindrome(word);



// ******* DICHIARAZIONE FUNZIONI ********

function isPalindrome(word) { 

    // METODO 1 - con Split, Join e Reverse 
    /*

    let invertedWord;
    let howislong=word.length;
    console.log("La parola è lunga: "+howislong);
    //utilizzo (split)              "cane" --> "c","a","n","e"
    //utilizzo (join)      "c","a","n","e" --> cane
    //utilizzo (reverse)   "c","a","n","e" --> "e","n","a","c"
    invertedWord = word.split('').reverse().join('');  //trasformo la stringa in array
    console.log("Parola invertita: "+ invertedWord);      //stamperà un array
    if(invertedWord===word){
        console.log("La parola inserita e' PALINDROMA");
        // return true;
    }
    else{
        console.log("La parola NON e' PALINDROMA");
        // return false;
    }

    */
    // METODO 1 (fine) 





    // METODO 2 - con ciò che ancora sappiamo
    
    //dichiaro un nuovo array
    let invertedWord = []; 

    //inserisco uno ad uno gli elementi all'interno, al contrario
    let j=0; 
    for(let i=word.length-1; i >= 0; i--) {
        invertedWord[j]=word[i];
        j++;
    }
    //stampa array invertito
    console.log(invertedWord);

    //eseguo un controllo su word lettera per lettera
    j=0; 
    for(let i=0; i<word.length; i++){
        if (word[i]!=invertedWord[j++]);{
            console.log("NON E' PALINDROMA");
            return false;
        }
    }
    //se arriva qui liscio allora è palindroma
    console.log("E' PALINDROMA");
    return true;
    
     // METODO 2 (fine)

    
}
    
    