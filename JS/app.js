function canIJoin(anni) {
  const disco = "discoteca";
  if (anni >= 16) {
    return `Prego, lei può entrare in ${disco}`;
  } else {
    return `Non è abbastanza grande per entrare in ${disco}`;
  }
}

console.log(canIJoin(16));

function transformObjects(numArray) {
  return numArray.map((num) => ({ val: num }));
}

console.log(transformObjects([3, 5, 7, 4]));

let a = 5;
let b = 10;
let somma = a + b;
console.log(`La somma di ${a} e ${b} è ${somma}`);

const frutti = ["banana", "mela", "arancia", "kiwi"];

console.log(`Il primo frutto è ${frutti[0]}`);
console.log(`L'ultimo frutto è ${frutti[frutti.length - 1]}`);

const persona = {
  name: "Tommaso",
  age: 21,
  city: "Milano",
  profession: "Software developer",
};

console.log(persona.name);
console.log(`La professione di ${persona.name} è ${persona.profession}`);

function saluta(nome) {
  return `Ciao, ${nome}!`;
}

console.log(saluta("Tommaso"));

function raddoppiaNumeri(numberArr) {
  return numberArr.map((num) => num * 2);
}

console.log(raddoppiaNumeri([1, 2, 3, 4, 5]));

function filtraPari(numberArr) {
  return numberArr.filter((num) => num % 2 === 0);
}

console.log(filtraPari([1, 2, 3, 4, 5, 6]));

function sommaNumeri(numberArr) {
  return numberArr.reduce((acc, num) => acc + num, 0);
}

console.log(sommaNumeri([1, 2, 3, 4, 5]));

function trasformaInOggetto(numberArr) {
  return numberArr.map((num) => ({ val: num }));
}

console.log(trasformaInOggetto([6, 7, 2, 8, 35, 64, 22, 32]));

const studenti = [
  { nome: "Tommaso", voto: 7 },
  { nome: "Anna", voto: 9 },
  { nome: "Luca", voto: 5 },
  { nome: "Sara", voto: 8 },
];

function studentiBravi() {
  return studenti.filter((stud) => {
    if (stud.voto >= 6) {
      return stud;
    }
  });
}

console.log(studentiBravi());

const hobbies = ["Football", "Tennis", "Coding"];

const tasks = ["Load dishwasher", "Go to the market", "Clean the car"];

const mergedArrays = [...hobbies, ...tasks];

console.log("Spread operator example", mergedArrays);

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let sum = 0;

for (let index = 1; index <= 100; index++) {
  sum += index;
}

console.log(sum);

let fruits = ["mela", "banana", "kiwi", "fragola"];

for (let i = 0; i <= fruits.length; i++) {
  console.log(fruits[i]);
}

function checkOrOdd(num) {
  if (num % 2 == 0) {
    return "Il numero è pari";
  } else {
    return "Il numero è dispari";
  }
}

console.log(checkOrOdd(4));

function generaMessaggio(nome, eta) {
  if (eta >= 18) {
    return `Ciao ${nome}, sei maggiorenne`;
  } else {
    return `Ciao ${nome}, sei minorenne`;
  }
}

console.log(generaMessaggio("Anna", 21));

function trovaPari(numeri) {
  const pari = [];

  for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 === 0) {
      pari.push(numeri[i]);
    }
  }

  return pari;
}

console.log(trovaPari([1, 2, 3, 4, 5, 6, 7, 8]));

const persone = [
  { nome: "Luca", eta: 17 },
  { nome: "Anna", eta: 22 },
  { nome: "Marco", eta: 16 },
  { nome: "Giulia", eta: 30 },
];

function filtraMaggiorenni(persone) {
  return persone.filter((persona) => persona.eta >= 18);
}

console.log(filtraMaggiorenni(persone));

function sommaArray(numArray) {
  let somma = 0;
  for (let i = 0; i < numArray.length; i++) {
    somma += numArray[i];
  }

  return somma;
}

console.log(sommaArray([1, 2, 3, 4]));

function trovaMassimo(numArray) {
  let massimo = numArray[0];

  for (let i = 1; i < numArray.length; i++) {
    if (numArray[i] > massimo) {
      massimo = numArray[i];
    }
  }

  return massimo;
}

console.log(trovaMassimo([2, 8, 3, 1, 12, 5]));

function contaMaggioriDi(numArray, soglia) {
  let contatore = 0;

  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > soglia) {
      contatore ++;
    }
  }

  return contatore;
}

console.log(contaMaggioriDi([3, 11, 8, 10, 9, 44, 5], 10));

function contaIniziali(parole, lettera){
  let contatore = 0;

  for(let i = 0; i < parole.length; i++){
    if(parole[i][0].toLowerCase() === lettera.toLowerCase()){
      contatore++
    }
  }
  return contatore;
}

console.log(contaIniziali(['ciao', 'giraffa', 'Gatto', 'Cane'], 'c'))