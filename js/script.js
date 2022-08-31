// Antonello's code. Git-Hub: antoinde

console.log("JavaScript is working properly! =) Let's code!");


// ******** CONSEGNA ********

/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per
 il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


/* ############################ solutions ############################## */



/*  // MI SERVIVA PER CAPIRE I VALORI GENERATI DALLA FUNZIONE
for(let i=0; i<100; i++)
console.log(randomNumber(1,5));
*/ 


// ---------------Esercizio parola PALINDROMA ---------------
    
    console.log("----ESERCIZIO PAROLA PALINDROMA----");
    // Chiedere all’utente di inserire una parola
    let word;
    word = prompt("Inserisci una parola!");
    console.log("Parola inserita: "+ word);
    // La parola inserita è palindroma?
    isPalindrome(word);


// ---------------(fine) Esercizio parola PALINDROMA ---------------

// ---------------Esercizio GIOCO PARI E DISPARI ---------------
    
    console.log("----GIOCO PARI E DISPARI ----");

    //chiedere all'utente se e' pari o dispari
    let userChoise;
    do{
        userChoise = prompt("Scegli pari (p) o dispari (d): ");
        console.log("Hai scritto: " + userChoise);
        if(  !('p'===userChoise) && !('d'===userChoise)  ) {
            console.log("HAI SBAGLIATO! RIPROVA! scegli \"p\" o \"d\"");
        }
        //rifai il ciclo se hai sbagliato
    }   while( !('p'===userChoise) && !('d'===userChoise) );


    //stampa cosa hai scelto
    if(userChoise==='p'){
        console.log("Hai scelto -----> PARI!");
    }
    else {
        console.log("Hai scelto ------> DISPARI!");
    }

    //inserire numero da 1 a 5
    let userNum;
    do{ // eseguo un controllo sul numero inserito
        userNum = parseInt(prompt("Inserisci numero (da 1 a 5) "));
        console.log("Hai scritto: " + userNum);
        if( !(userNum===1) && !(userNum===2) && !(userNum===3) && !(userNum===4) && !(userNum===5) ) {
            console.log("HAI SBAGLIATO! RIPROVA! Inserisci numero da 1 a 5");
        }
        console.log(`[user] ha buttato il numero: ${userNum}`);
        //rifai il ciclo se hai sbagliato
    }   while( !(userNum===1) && !(userNum===2) && !(userNum===3) && !(userNum===4) && !(userNum===5) );

    //Generiamo un numero random (tra 1 e 5) per il PC usando la funzione
    let computerNum = randomNumber(1, 5);
    
    // mostra il valore generato per il computer
    console.log(`[computer] ha buttato il numero: ${computerNum}`);

    //sommiamo i due numeri
    let sum = userNum + computerNum;
    console.log(`La somma fa -----> ${sum}`);

    //con una funzione stabilisci se e' PARI o DISPARI
    let whoWin = isOddOrEven(sum);
    console.log(whoWin);

    
    //stampa il vincitore
    if(userChoise===whoWin)
    console.log("Ha vinto [user]!");
    else
    console.log("Ha vinto [computer]!");



    
// ---------------(fine)Esercizio GIOCO PARI E DISPARI ---------------






// ******* DICHIARAZIONE FUNZIONI ********

function isPalindrome(word) { 

    // METODO 1 - con Split, Join e Reverse 
        

        let invertedWord;
        let howislong=word.length;
        console.log("La parola è lunga: "+howislong);
        //utilizzo (split)              "cane" --> "c","a","n","e"
        //utilizzo (join)      "c","a","n","e" --> cane
        //utilizzo (reverse)   "c","a","n","e" --> "e","n","a","c"
        invertedWord = word.split('').reverse().join('');  //trasformo la stringa in array
        console.log("Parola INVERTITA: "+ invertedWord);      //stamperà un array
        if(invertedWord===word){
            console.log("La parola inserita e' PALINDROMA");
            // return true;
        }
        else{
            console.log("La parola NON e' PALINDROMA");
            // return false;
        }

        
    // METODO 1 (fine) 





    // METODO 2 - con ciò che ancora sappiamo (not works)
    /*
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
    */
    // METODO 2 (fine)

    
}

function randomNumber(from, to){
    //genera un numero a caso tra (from) e (to)
    return ( Math.floor(Math.random() * to ) + from );
}


function isOddOrEven(sum){

    if( sum%2==0 ) //se da resto 0 e' pari
        return 'p';
    else
        return 'd'; //altrimenti dispari
}