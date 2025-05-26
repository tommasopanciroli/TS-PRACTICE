// class User{
//    name: string;
//    age: number;

//   constructor(n: string, a: number) {
//        this.name = n;
//       this.age = a;
//    }
//}

// Il costruttore è possibile accorciarlo utilizzando le seguenti shortcut, evitando di dover inizializzare con le prime proprietà.

class User {
  public hobbies: string[] = [];

  constructor(public name: string, private age: number) {}

  greet() {
    console.log("My age", this.age);
  }
}

const firstUser = new User("Tommaso", 21);
const secondUser = new User("Luca", 25);

console.log(firstUser, secondUser);
