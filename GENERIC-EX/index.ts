// ESERCIZIO 1: tipizzazione base

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

let user: User = {
  id: 1,
  name: "Tommaso",
  isAdmin: true,
};

// ESERCIZIO 2: tipi avanzati

type Status = "loading" | "success" | "error";

function printStatus(status: Status): string {
  if (status === "loading") {
    return "Caricamento in corso";
  } else if (status === "success") {
    return "Operazione effettuata con successo";
  } else {
    return "Errore sconosciuto";
  }
}

let stato1: Status = "loading";
let stato2: Status = "error";
let stato3: Status = "success";

console.log(printStatus(stato1));
console.log(printStatus(stato2));
console.log(printStatus(stato3));

// ESERCIZIO 3: funzioni

function greet(name: string, greeting?: string): string {
  if (greeting === undefined) {
    return `Ciao ${name}`;
  } else {
    return `${greeting} ${name}`;
  }
}

console.log(greet("Tommaso"));
console.log(greet("Luca", "Complimenti"));

// ESERCIZIO 4: classi e interfacce

interface IVehicle {
  brand: string;
  start(): void;
}

class Car implements IVehicle {
  constructor(public brand: string) {}
  start(): void {
    console.log(`${this.brand} ha acceso il motore`);
  }
}

const panda = new Car("Fiat");
panda.start();

// ESERCIZIO 5: generics

function wrapInArray<T>(arr: T): T[] {
  return [arr];
}

const first = wrapInArray<number>(1);
const second = wrapInArray<string>("Tomamso");

// ESERCIZIO 6: utility types

type AnotherUser = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<AnotherUser, "id" | "name">;

const item: UserPreview = {
  id: 1,
  name: "Tommaso",
};

type PartialUser = Partial<AnotherUser>;

const user1: PartialUser = { name: "Tommaso", email: "tommaso@tommaso.it" };

// ESERCIZIO 7: conditional types

type IsString<T> = T extends string ? "YES" : "NO";

type A = IsString<string>;
type B = IsString<"ciao">;
type C = IsString<3>;
