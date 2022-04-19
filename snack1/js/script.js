//SNACK 1
//chiedere due parole 
const firstWord = prompt('prima parola');
const secondWord = prompt('seconda parola');

console.log(firstWord, secondWord);
//definire lunghezza parole
const firstLength = firstWord.length;
const secondLength = secondWord.length;

console.log(firstLength, secondLength);
//stampare prima la piu lunga poi la piu corta
let result;
if(firstLength > secondLength){
    result = `${secondWord}, ${firstWord}`;
} else if (secondLength > firstLength){
    result = `${firstWord}, ${secondWord}`;
} else {
    result = `uguali`;
}

console.log(result);

//visualizzare nel browser
document.querySelector('.container').innerHTML = result;



