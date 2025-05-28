"use strict";
// ESERCIZIO 1: classe semplice
Object.defineProperty(exports, "__esModule", { value: true });
class Libro {
    titolo;
    autore;
    constructor(titolo, autore) {
        this.titolo = titolo;
        this.autore = autore;
    }
    getTitolo() {
        return this.titolo;
    }
    getAutore() {
        return this.autore;
    }
    descrivi() {
        console.log("Il libro " +
            this.getTitolo() +
            " è stato scritto da " +
            this.getAutore() +
            ".");
    }
}
const libro1 = new Libro("Il signore degli anelli", "John Ronald Reuel Tolkien");
libro1.descrivi();
class Auto {
    marca;
    anno;
    modello;
    constructor(marca, anno, modello) {
        this.marca = marca;
        this.anno = anno;
        this.modello = modello;
    }
    dettagli() {
        return (`Marca: ` +
            this.marca +
            ", Modello: " +
            this.modello +
            ", Anno: " +
            this.anno +
            ".");
    }
}
const auto1 = new Auto("Ferrari", 2025, "SF90 Stradale");
console.log(auto1.dettagli());
// ESERCIZIO 3: classe con GETTER E SETTER
class Contatore {
    _valore;
    constructor(_valore) {
        this._valore = _valore;
    }
    get valore() {
        return this._valore;
    }
    set valore(v) {
        if (v >= 0) {
            this._valore = v;
        }
        else {
            throw new Error("Valore non valido");
        }
        this._valore = v;
    }
    incrementa() {
        this._valore += 1;
        return this._valore;
    }
}
const conta1 = new Contatore(5);
console.log(conta1.valore);
conta1.incrementa();
console.log(conta1.valore);
conta1.valore = 10;
console.log(conta1.valore);
conta1.incrementa();
console.log(conta1.valore);
