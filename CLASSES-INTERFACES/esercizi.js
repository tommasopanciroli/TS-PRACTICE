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
    console.log(
      "Il libro " +
        this.getTitolo() +
        " è stato scritto da " +
        this.getAutore() +
        "."
    );
  };
  return Libro;
})();
var libro1 = new Libro("Il signore degli anelli", "John Ronald Reuel Tolkien");
libro1.descrivi();
var Auto = /** @class */ (function () {
  function Auto(marca, anno, modello) {
    this.marca = marca;
    this.anno = anno;
    this.modello = modello;
  }
  Auto.prototype.dettagli = function () {
    return (
      "Marca: " +
      this.marca +
      ", Modello: " +
      this.modello +
      ", Anno: " +
      this.anno +
      "."
    );
  };
  return Auto;
})();
var auto1 = new Auto("Ferrari", 2025, "SF90 Stradale");
console.log(auto1.dettagli());
