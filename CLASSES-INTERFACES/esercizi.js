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
var Auto = /** @class */ (function () {
    function Auto(marca, anno, modello) {
        this.marca = marca;
        this.anno = anno;
        this.modello = modello;
    }
    Auto.prototype.dettagli = function () {
        return ("Marca: " +
            this.marca +
            ", Modello: " +
            this.modello +
            ", Anno: " +
            this.anno +
            ".");
    };
    return Auto;
}());
var auto1 = new Auto("Ferrari", 2025, "SF90 Stradale");
console.log(auto1.dettagli());
// ESERCIZIO 3: classe con GETTER E SETTER
var Contatore = /** @class */ (function () {
    function Contatore(_valore) {
        this._valore = _valore;
    }
    Object.defineProperty(Contatore.prototype, "valore", {
        get: function () {
            return this._valore;
        },
        set: function (v) {
            if (v >= 0) {
                this._valore = v;
            }
            else {
                throw new Error("Valore non valido");
            }
            this._valore = v;
        },
        enumerable: false,
        configurable: true
    });
    Contatore.prototype.incrementa = function () {
        this._valore += 1;
        return this._valore;
    };
    return Contatore;
}());
var conta1 = new Contatore(5);
console.log(conta1.valore);
conta1.incrementa();
console.log(conta1.valore);
conta1.valore = 10;
console.log(conta1.valore);
conta1.incrementa();
console.log(conta1.valore);
