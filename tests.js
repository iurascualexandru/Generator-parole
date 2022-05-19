// Vor fi 4 tipuri de securitate a parolelor:

// 1. Securitate Slaba -> minim 6 caractere.
// 2. Securitate Obisnuita -> minim 8 caractere -> litere + cifre
// 3. Securitate Avansata -> minim 8 caractere -> Majuscule + litere mici + cifre
// 4. Securitate Ultra -> minim 12 caractere -> Majuscule + litere mici + cifre + simboluri.

const alfabetm = `abcdefghijklmnopqrstuvwxyz`;
const alfabetM = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const numere = `0123456789`;
const simboluri = `!@#$%^&*()`;

let pass = [];
generate.addEventListener(`click`, function () {
  for (let i = 0; i < 10; i++) {
    pass[i] = passwords[i];
  }
});

let validLength1 = false;
let validLength2 = false;
let validLength3 = false;

let acceptat1 = 0;
let refuzat1 = 0;
let acceptat2 = 0;
let refuzat2 = 0;
let acceptat3 = 0;
let refuzat3 = 0;

let areLiteram = false;
let areLiteraM = false;
let areNumar = false;
let areSimbol = false;

let pass1 = 0;
let fail1 = 0;
let pass2 = 0;
let fail2 = 0;
let pass3 = 0;
let fail3 = 0;
let pass4 = 0;
let fail4 = 0;

let nivel1 = 0;
let nivel2 = 0;
let nivel3 = 0;
let nivel4 = 0;

// 1. Securitate Slaba -> minim 6 caractere.
// 2. Securitate Obisnuita -> minim 8 caractere -> litere + cifre
// 3. Securitate Avansata -> minim 8 caractere -> Majuscule + litere mici + cifre
// 4. Securitate Ultra -> minim 12 caractere -> Majuscule + litere mici + cifre + simboluri.

generate.addEventListener(`click`, function () {
  // TEST 1: Verificare lungime parola pentru fiecare securitate:
  for (let j = 0; j < pass.length; j++) {
    areLiteram = false;
    areLiteraM = false;
    areNumar = false;
    areSimbol = false;
    let x = pass[j];
    if (x.length >= 6) {
      validLength1 = true;
      nivel1++;
    } else validLength1 = false;

    if (x.length >= 8) {
      validLength2 = true;
    } else validLength2 = false;

    if (x.length >= 12) {
      validLength3 = true;
    } else validLength3 = false;

    if (validLength1 == true) acceptat1++;
    else refuzat1++;

    if (validLength2 == true) acceptat2++;
    else refuzat2++;

    if (validLength3 == true) acceptat3++;
    else refuzat3++;

    // TEST 2: Verificare simboluri parola

    for (const literam of alfabetm) {
      if (pass[j].includes(literam)) {
        areLiteram = true;
        // console.log(`are litera mica`);
      }
    }
    for (const literaM of alfabetM) {
      if (pass[j].includes(literaM)) {
        areLiteraM = true;
        // console.log(`Are litera mare`);
      }
    }
    for (const numar of numere) {
      if (pass[j].includes(numar)) {
        areNumar = true;
        // console.log(`are numar`);
      }
    }
    for (const simbol of simboluri) {
      if (pass[j].includes(simbol)) {
        areSimbol = true;
        // console.log(`are simbol`);
      }
    }
    //Verificam ce contine parola, pentru a adauga parola la pass / fail
    if (areLiteram && areLiteraM && areNumar && areSimbol) {
      if (x.length >= 8) {
        nivel2++;
        nivel3++;
      }
      if (x.length >= 12) {
        nivel4++;
      }
      pass1++;
      pass2++;
      pass3++;
      pass4++;
    } else if (areLiteram && areLiteraM && areNumar) {
      if (x.length >= 8) {
        nivel2++;
        nivel3++;
      }
      pass1++;
      pass2++;
      pass3++;
      fail4++;
    } else if (areLiteram && areNumar) {
      if (x.length >= 8) {
        nivel2++;
      }
      pass1++;
      pass2++;
      fail3++;
      fail4++;
    } else {
      pass1++;
      fail2++;
      fail3++;
      fail4++;
    }

    console.log(pass[j]);
    console.log(validLength1, validLength2, validLength3);
  }
  console.log(pass1, fail1, pass2, fail2, pass3, fail3, pass4, fail4);
  console.log(nivel1, nivel2, nivel3, nivel4);
});
