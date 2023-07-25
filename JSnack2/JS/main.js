let arrayName = ['Gatsby', 'George', 'Tom', 'Daisy'];
let arraySurname = ['Jay', 'Wilson', 'Buchanan', 'McKee'];


let nameRandom = [''];
let surnameRandom = [''];

for (let i = 0; i <= arrayName.length - 1; i++) {


    let random = Math.floor(Math.random() * arrayName.length);

    //console.log('Random Name: ', arrayName[random]);
    nameRandom = arrayName[random];
    console.log('Name: ', nameRandom);
}

for (let i = 0; i <= arraySurname.length - 1; i++) {


    let random = Math.floor(Math.random() * arraySurname.length);

    // console.log('Random Surname: ', arraySurname[random]);
    surnameRandom = arraySurname[random];
    console.log('Surname: ', surnameRandom);
}



