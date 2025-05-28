"use strict";
// class User{
//    name: string;
//    age: number;
Object.defineProperty(exports, "__esModule", { value: true });
//   constructor(n: string, a: number) {
//        this.name = n;
//       this.age = a;
//    }
//}
// Il costruttore è possibile accorciarlo utilizzando le seguenti shortcut, evitando di dover inizializzare con le prime proprietà.
class User {
    name;
    age;
    hobbies = [];
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("My age", this.age);
    }
}
const firstUser = new User("Tommaso", 21);
const secondUser = new User("Luca", 25);
console.log(firstUser, secondUser);
