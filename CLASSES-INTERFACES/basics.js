// class User{
//    name: string;
//    age: number;
//   constructor(n: string, a: number) {
//        this.name = n;
//       this.age = a;
//    }
//}
// Il costruttore è possibile accorciarlo utilizzando le seguenti shortcut, evitando di dover inizializzare con le prime proprietà.
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.hobbies = [];
    }
    User.prototype.greet = function () {
        console.log("My age", this.age);
    };
    return User;
}());
var firstUser = new User("Tommaso", 21);
var secondUser = new User("Luca", 25);
console.log(firstUser, secondUser);
