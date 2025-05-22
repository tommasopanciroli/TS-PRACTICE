// Dichiara una variabile username di tipo string, una age di tipo number e una isLoggedIn di tipo boolean

let username: string;
username = "tommaso";

let age: number;
age = 21;

let isLoggedIn: boolean;
isLoggedIn = true;

// Crea una funzione greet che accetta un parametro name: string e ritorna una stringa del tipo "Ciao, <name>"

function greet(name: string): string {
  return `Ciao, ${name}`;
}

console.log(greet("Gioele"));

// Definisci un oggetto user con le seguenti proprietà: name: string, email: string, age: number

type User = {
  name: string;
  email: string;
  age: number;
};

const user: User = {
  name: "Tommaso",
  email: "tommaso@tommaso",
  age: 21,
};

const users: User[] = [
  { name: "Tommaso", email: "tommaso@tommaso", age: 21 },
  { name: "Luca", email: "tommaso@tommaso", age: 21 },
  { name: "Federico", email: "tommaso@tommaso", age: 21 },
];

users.forEach((user) => {
  console.log(user.name);
});

// Crea una variabile status che può avere solo uno di questi tre valori stringa: "success", "error", "loading"

let stato: "success" | "error" | "loading";

stato = "success";

// Creo ora una funzione che mi ritorna una stringa in base al tipo di stato

function handleStato(stato: "success" | "error" | "loading") {
  if (stato === "success") {
    console.log("Operazione riuscita");
  } else if (stato === "error") {
    console.log("Si è verificato un errore");
  } else {
    console.log("Caricamento in corso...");
  }
}

handleStato("success");

// Scrivi una funzione chiamata calculateTotal che accetta due parametri price e quantity. La funzione deve ritornare il totale e il valore di ritorno deve essere tipizzato

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

const total = calculateTotal(5.99, 13);
console.log(total);

// Scrivi una funzione chiamata canAccess che accetta due parametri: isAdmin: boolean age: number La funzione deve: Restituire true se l’utente è admin oppure ha almeno 18 anni Altrimenti, restituire false Il ritorno della funzione deve essere tipizzato come boolean.

function canAccess(isAdmin: boolean, age: number): boolean {
  if (isAdmin || age >= 18) {
    return true;
  } else {
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

function getAdults(
  utenti: { name: string; age: number }[]
): { name: string; age: number }[] {
  const risultato = utenti.filter((utente) => {
    return utente.age >= 18;
  });

  return risultato;
}

console.log(getAdults(utenti));

// Altro esercizio

function formatUserDescriptions(
  utenti: { name: string; age: number }[]
): string[] {
  const risultato = utenti.map((utente) => {
    return `${utente.name} ha ${utente.age} anni`;
  });
  return risultato;
}

console.log(formatUserDescriptions(utenti));

// Altro esercizio

let userInfo: string | number;

(userInfo = "Tommaso"), 21;

// Altro esercizio

function isUserAdmin(oggetto: {
  name: string;
  role: string;
  age: number;
}): boolean {
  if (oggetto.role === "admin") {
    return true;
  } else {
    return false;
  }
}

console.log(isUserAdmin({ name: "Tommaso", role: "admin", age: 21 }));
console.log(isUserAdmin({ name: "Anna", role: "user", age: 21 }));

// Altro esercizio

function sumArray(numeri: number[]): number {
  let somma: number = 0;
  numeri.forEach((num) => {
    somma += num;
  });
  return somma;
}

console.log(sumArray([3, 4, 5, 6]));

// Altro esercizio

const products: { name: string; price: number; inStock: boolean }[] = [
  { name: "MacBook Air", price: 2000, inStock: true },
  { name: "Iphone 12 mini", price: 800, inStock: true },
  { name: "Lampada", price: 15, inStock: false },
  { name: "Cuffie da gaming", price: 40, inStock: true },
  { name: "Bandiera", price: 30, inStock: false },
];

function getAvailableProducts(
  products: { name: string; price: number; inStock: boolean }[]
): string[] {
  const disponibili = products.filter((product) => product.inStock);
  const risultato = disponibili.map(
    (product) => `${product.name} - ${product.price}€`
  );
  return risultato;
}

console.log(getAvailableProducts(products));

// Altro esercizio

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Moby Dick", author: "Herman Melville", year: 1851 },
  { title: "1984", author: "George Orwell", year: 1949 },
];

function getFormattedBooks(
  books: { title: string; author: string; year: number }[]
): string[] {
  const risultato = books.map((libri) => {
    return `Titolo: ${libri.title}, Autore: ${libri.author}, Anno: ${libri.year}`;
  });
  return risultato;
}

console.log(getFormattedBooks(books));

// Altro esercizio

function sumAvailableProducts(
  products: { name: string; price: number; inStock: boolean }[]
): number {
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
