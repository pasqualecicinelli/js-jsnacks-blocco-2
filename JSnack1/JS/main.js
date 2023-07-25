const numberUser = parseInt(prompt('Inserisci un numero'));

if (numberUser % 2 == 0) {

    console.log('Il numero inserito è pari: ' + numberUser);

    alert('Il numero inserito è pari: ' + numberUser);

} else {

    const nextNumber = parseInt((numberUser + 1));

    console.log('Il numero inserito è dispari, quindi stampo il numero successivo: ' + nextNumber);

    alert('Il numero inserito è dispari, quindi stampo il numero successivo: ' + nextNumber);
}