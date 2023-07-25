let arrayName = ['Gatsby', 'George', 'Tom', 'Daisy'];
let arraySurname = ['Jay', 'Wilson', 'Buchanan', 'McKee'];

let nameRandom = new Array();

let surnameRandom = new Array();

for (let i = 0; i <= arrayName.length - 1; i++) {



    let random = Math.floor(Math.random() * arrayName.length);

    // console.log('Random Name: ', arrayName[random]);
    nameRandom[i] = arrayName[random];

    console.log(nameRandom);


}

for (let i = 0; i <= arraySurname.length - 1; i++) {


    let random = Math.floor(Math.random() * arraySurname.length);

    //console.log('Random Surname: ', arraySurname[random]);
    surnameRandom[i] = arraySurname[random];

}

alert('name random: ' + nameRandom);
alert('Surname random: ' + surnameRandom);


//if (nameRandom.length == arrayName.length) && (surnameRandom.length == arraySurname.length){}



