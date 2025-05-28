// ESERCIZIO 1: tipizzazione base
var user = {
    id: 1,
    name: "Tommaso",
    isAdmin: true,
};
function printStatus(status) {
    if (status === "loading") {
        return "Caricamento in corso";
    }
    else if (status === "success") {
        return "Operazione effettuata con successo";
    }
    else {
        return "Errore sconosciuto";
    }
}
var stato1 = "loading";
var stato2 = "error";
var stato3 = "success";
console.log(printStatus(stato1));
console.log(printStatus(stato2));
console.log(printStatus(stato3));
// ESERCIZIO 3: funzioni
function greet(name, greeting) {
    if (greeting === undefined) {
        return "Ciao ".concat(name);
    }
    else {
        return "".concat(greeting, " ").concat(name);
    }
}
console.log(greet("Tommaso"));
console.log(greet("Luca", "Complimenti"));
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " ha acceso il motore"));
    };
    return Car;
}());
var panda = new Car("Fiat");
panda.start();
// ESERCIZIO 5: generics
function wrapInArray(arr) {
    return [arr];
}
var first = wrapInArray(1);
var second = wrapInArray("Tomamso");
var item = {
    id: 1,
    name: "Tommaso",
};
var user1 = { name: "Tommaso", email: "tommaso@tommaso.it" };
