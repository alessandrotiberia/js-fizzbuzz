/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

//domande:
//Come faccio a sapere se un numero è divisibile per?
//Abbiamo visto qualcosa di particolare che possiamo usare?

const numero = (parseInt(prompt("inserisci numero")));

//stampiamo numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //se sono multipli di 3 e 5
    if ((i % 3 === 0) && (i % 5 === 0)) {

        console.log("è multiplo di 3 e 5, quindi FIZZBUZZ");
        
        //multipli di 3
    } else if (i % 3 === 0) { 

        console.log("multipli di 3, quindi FIZZ");
        
        // se sono multipli di 5
    } else if (i % 5 === 0 ){
        
        console.log("multipli di 5, quindi BUZZ");
        
    } else {
        console.log(i);
        
    }
}