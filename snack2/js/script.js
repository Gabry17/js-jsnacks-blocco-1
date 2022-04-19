//SNACK2
//creare array vuoto
let number = [];
//chiedere 6 numeri all utente
for(let i = 0; i < 6; i ++){
    const addNumber = parseInt(prompt('inserisci numero'));
    console.log(addNumber);
    //i numeri dispari vanno inseriti nell array
    if (addNumber % 2 === 1) {
        number.push(addNumber);
    }
}
console.log(number);
