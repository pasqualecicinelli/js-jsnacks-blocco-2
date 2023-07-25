const arrayComplit = [3, 4, 6, 10, 8];
let arrayVoid = [40, 4];

for (let i = 0; i < arrayComplit.length; i++) {

    if (arrayVoid.length < arrayComplit.length) {

        let inserisci = parseInt(prompt('inserisci un numero'));

        arrayVoid.push(inserisci);
    }


}

console.log('Array completo: ' + arrayComplit);
console.log('Indice completo: ' + arrayComplit.length);
console.log('Ora gli array hanno lo stesso numero di indici: ' + arrayVoid);
console.log('Indice: ' + arrayVoid.length);