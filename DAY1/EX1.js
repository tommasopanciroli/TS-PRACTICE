"use strict";
// Dichiara una variabile username di tipo string, una age di tipo number e una isLoggedIn di tipo boolean
Object.defineProperty(exports, "__esModule", { value: true });
let username;
username = "tommaso";
let age;
age = 21;
let isLoggedIn;
isLoggedIn = true;
// Crea una funzione greet che accetta un parametro name: string e ritorna una stringa del tipo "Ciao, <name>"
function greet(name) {
    return `Ciao, ${name}`;
}
console.log(greet("Gioele"));
const user = {
    name: "Tommaso",
    email: "tommaso@tommaso",
    age: 21,
};
const users = [
    { name: "Tommaso", email: "tommaso@tommaso", age: 21 },
    { name: "Luca", email: "tommaso@tommaso", age: 21 },
    { name: "Federico", email: "tommaso@tommaso", age: 21 },
];
users.forEach((user) => {
    console.log(user.name);
});
// Crea una variabile status che può avere solo uno di questi tre valori stringa: "success", "error", "loading"
let stato;
stato = "success";
// Creo ora una funzione che mi ritorna una stringa in base al tipo di stato
function handleStato(stato) {
    if (stato === "success") {
        console.log("Operazione riuscita");
    }
    else if (stato === "error") {
        console.log("Si è verificato un errore");
    }
    else {
        console.log("Caricamento in corso...");
    }
}
handleStato("success");
// Scrivi una funzione chiamata calculateTotal che accetta due parametri price e quantity. La funzione deve ritornare il totale e il valore di ritorno deve essere tipizzato
function calculateTotal(price, quantity) {
    return price * quantity;
}
const total = calculateTotal(5.99, 13);
console.log(total);
// Scrivi una funzione chiamata canAccess che accetta due parametri: isAdmin: boolean age: number La funzione deve: Restituire true se l’utente è admin oppure ha almeno 18 anni Altrimenti, restituire false Il ritorno della funzione deve essere tipizzato come boolean.
function canAccess(isAdmin, age) {
    if (isAdmin || age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(canAccess(false, 17));
console.log(canAccess(true, 15));
console.log(canAccess(false, 21));
// Scrivi una funziona chiamata getAdults che accetta un array di oggetti con proprietà name e age e ritorna solo gli utenti
const utenti = [
    { name: "Tommaso", age: 21 },
    { name: "Gioele", age: 17 },
    { name: "Anna", age: 25 },
    { name: "Luca", age: 16 },
];
function getAdults(utenti) {
    const risultato = utenti.filter((utente) => {
        return utente.age >= 18;
    });
    return risultato;
}
console.log(getAdults(utenti));
// Altro esercizio
function formatUserDescriptions(utenti) {
    const risultato = utenti.map((utente) => {
        return `${utente.name} ha ${utente.age} anni`;
    });
    return risultato;
}
console.log(formatUserDescriptions(utenti));
// Altro esercizio
let userInfo;
(userInfo = "Tommaso"), 21;
// Altro esercizio
function isUserAdmin(oggetto) {
    if (oggetto.role === "admin") {
        return true;
    }
    else {
        return false;
    }
}
console.log(isUserAdmin({ name: "Tommaso", role: "admin", age: 21 }));
console.log(isUserAdmin({ name: "Anna", role: "user", age: 21 }));
// Altro esercizio
function sumArray(numeri) {
    let somma = 0;
    numeri.forEach((num) => {
        somma += num;
    });
    return somma;
}
console.log(sumArray([3, 4, 5, 6]));
// Altro esercizio
const products = [
    { name: "MacBook Air", price: 2000, inStock: true },
    { name: "Iphone 12 mini", price: 800, inStock: true },
    { name: "Lampada", price: 15, inStock: false },
    { name: "Cuffie da gaming", price: 40, inStock: true },
    { name: "Bandiera", price: 30, inStock: false },
];
function getAvailableProducts(products) {
    const disponibili = products.filter((product) => product.inStock);
    const risultato = disponibili.map((product) => `${product.name} - ${product.price}€`);
    return risultato;
}
console.log(getAvailableProducts(products));
// Altro esercizio
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { title: "1984", author: "George Orwell", year: 1949 },
];
function getFormattedBooks(books) {
    const risultato = books.map((libri) => {
        return `Titolo: ${libri.title}, Autore: ${libri.author}, Anno: ${libri.year}`;
    });
    return risultato;
}
console.log(getFormattedBooks(books));
// Altro esercizio
function sumAvailableProducts(products) {
    const available = products.filter((product) => product.inStock);
    const result = available.reduce((sum, product) => {
        if (product.inStock) {
            return sum + product.price;
        }
        return sum;
    }, 0);
    return result;
}
console.log(sumAvailableProducts(products));
