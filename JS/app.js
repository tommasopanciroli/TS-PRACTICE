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
