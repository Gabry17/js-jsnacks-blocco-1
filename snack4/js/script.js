//SNACK4

//chiedere un numero di 4 cifre all utente
let addNumber = parseInt(prompt('inserire numero di 4 cifre'));
console.log(addNumber);

//calcolare la soma di tutte le cifre che compongono il numero
//dividere i numeri
let i = 0;

while(addNumber) {
    i += addNumber % 10;
    addNumber = Math.floor(addNumber / 10);
}

console.log(i);
