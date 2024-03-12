// Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.
// Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
// ogni dado ha 6 facce
// ogni giocatore tirerà il dado n volte
// Per ogni giocatore:
// generare un numero casuale per ogni tiro che effettuera’,
// ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

// TIPS:
// Usiamo questa formula per generare un numero random → Math.floor(Math.random() * (7 - 1) + 1);

// funzione dadi 

// let player1 = prompt ("giocatore 1 inserisci il tuo nome");
// let player2 = prompt ("giocatore 2 inserisci il tuo nome");
// let scorepl1 = 0;
// let scorepl2 = 0;

// let tiri =parseInt(prompt("inserire il numero dei tiri"));




// function tirodadi(pt1, pt2, sct1, sct2, roll ) {
//     while (isNaN(roll)) {roll =parseInt(prompt("inserire il numero dei tiri"));
//         }
//         for (let i = 1 ; i <= roll; i++) {
//             sct1 = sct1 + Math.floor(Math.random() * (7 - 1) + 1);
//             sct2 = sct2 + Math.floor(Math.random() * (7 - 1) + 1);
//             }
    
//          if (sct1 < sct2) {
//              return alert(`${pt1} ha totalizzato ${sct1} punti , ${pt2} ha    totalizzato ${sct2} il vincitore è ${pt2}`);
//             } 
//              else if (sct1 > sct2) {
//                 return alert(`${pt1} ha totalizzato ${sct1} punti , ${pt2} ha totalizzato ${sct2} il vincitore è ${pt1}`);
//             }
//              else if (sct1 == sct2) {
//                  return alert(`${pt1} ha totalizzato ${sct1} punti , ${pt2} ha totalizzato ${sct2} è un pareggio`);
//             }
                 
//     }
    

//    tirodadi(player1, player2, scorepl1, scorepl2, tiri);



//    esercizio 2


// Traccia 2:
// Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
// N dovra’ rappresentare il parametro formale della funzione
// tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
// tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
// e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBu



// let select2 = 35
// // let select = prompt ("inserisci un numero");
// function cambio(n) {
    
//     for (let i = 1 ;  i <= n; i++) {
        
//         if (i % 15 === 0) {
//         console.log("fizzbuzz");
//         }
//         else if (i % 5 === 0) {
//             console.log("buzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         }
//         else {
//         console.log(i)
//         }
//     }

// }
// cambio(n);


// traccia 3

// Traccia 3:
// Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
// Esempio:
// Input : 9 → output: 1 cifra
// Input : 99 → output: 2 cifre
// Input: 12000 → output: Numero troppo grande

// let num =parseInt(prompt("scegli un numero da 0 a 9999")).toString();

// function contacifre(cfr) {
    
//     if (cfr <= 9999) {
//         console.log(` ${cfr.length}`);
//     }
//     else {
//         alert("numero non valido");
//     }
// }

    
//     contacifre(num);




//     Traccia 4:
// Scrivere una funzione che simuli un distributore di bevande:
// fare in modo che l’utente possa inserire il numero corrispondente alla bevanda, mediante l’istruzione prompt:
// se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
// se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
// se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
// se inserisce qualcosa di diverso, il programma dovra’ riproporre la domanda di partenza (modificato)
// Potete provare ad inserire condizioni e controlli ulteriori se volete sperimentare. Stupitemi!


// let selezione = parseInt(prompt(" '1' per  acqua \n '2'  per coca-cola \n '3' per birra  "));
// while (selezione !== 1 && selezione !== 2 && selezione !==3) {selezione = parseInt(prompt("hai effettuato una scelta errata \n '1' per  acqua \n '2'  per coca-cola \n '3' per birra  "));
// }

// function dist(bevanda) {
    
//     if (bevanda == 1) {
//        console.log("hai selezionato acqua");
       
//     }else if (bevanda == 2) {
//        console.log("hai selezionato coca-cola");
       
//     }else if (bevanda == 3) {
//        console.log("hai selezionato birra");
       
//     }
//      else {
       
//     }   
// }


// traccia 5

// Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:

// Esempio:
  
// let numbers = [3, 5, 10, 2, 8];
// Output: media = 5.6, valori minori = [3, 5, 2]

// Variante:
// Stampa anche quanti sono i valori minori della media e quanti quelli maggiori.


// let numbers = [30 , 52 , 17 , 12 , 75 , 85 ,];

// let media = numbers.reduce((acc, el ) => acc + el, 0  ) / 6;
// console.log(media);

// let maxmedia = numbers.filter(el => el > media);
// console.log(maxmedia);

// let minmedia = numbers.filter (el => el < media);
// console.log(minmedia);

// Traccia 6:
// Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
// Esempio:
// Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
// Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]
// Variante:
// Prova ad ordinali in modo crescente.

let num = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
 num.sort ((a, b) => a - b )  ;
 console.log(num);
 num.sort ((a, b)=> b - a );
 console.log(num);



