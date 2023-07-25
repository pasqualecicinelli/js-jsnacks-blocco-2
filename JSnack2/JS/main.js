let arrayName = ['Gatsby', 'George', 'Tom', 'Daisy'];
let arraySurname = ['Jay', 'Wilson', 'Buchanan', 'McKee'];

let nameRandom = new Array();

let surnameRandom = new Array();

for (let i = 0; i < 5; i++) {

    let randomName = Math.floor(Math.random() * arrayName.length);
    let randomSurname = Math.floor(Math.random() * arraySurname.length);

    console.log(arrayName[randomName] + ' ' + arraySurname[randomSurname]);
}



