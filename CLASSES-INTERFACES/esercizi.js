// ESERCIZIO 1: classe semplice
var Libro = /** @class */ (function () {
    function Libro(titolo, autore) {
        this.titolo = titolo;
        this.autore = autore;
    }
    Libro.prototype.getTitolo = function () {
        return this.titolo;
    };
    Libro.prototype.getAutore = function () {
        return this.autore;
    };
    Libro.prototype.descrivi = function () {
        console.log("Il libro " +
            this.getTitolo() +
            " è stato scritto da " +
            this.getAutore() +
            ".");
    };
    return Libro;
}());
var libro1 = new Libro("Il signore degli anelli", "John Ronald Reuel Tolkien");
libro1.descrivi();
