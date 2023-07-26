let numberIntegers = [1, 10, 6, 7, 20];

console.log('Array: ' + numberIntegers);

let result = 0;

for (i = 0; i < numberIntegers.length; i++) {

    if (i % 2 == 1) {

        result += numberIntegers[i];
    }
}
console.log('Somma degli elementi con indice dispari: ' + result)