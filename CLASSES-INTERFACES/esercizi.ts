// ESERCIZIO 1: classe semplice

class Libro {
  constructor(private titolo: string, private autore: string) {}

  getTitolo(): string {
    return this.titolo;
  }

  getAutore(): string {
    return this.autore;
  }

  descrivi() {
    console.log(
      "Il libro " +
        this.getTitolo() +
        " è stato scritto da " +
        this.getAutore() +
        "."
    );
  }
}

const libro1 = new Libro(
  "Il signore degli anelli",
  "John Ronald Reuel Tolkien"
);

libro1.descrivi();

// ESERCIZIO 2: interfaccia + classe

interface Veicolo {
  marca: string;
  anno: number;
  dettagli(): string;
}

class Auto implements Veicolo {
  constructor(
    public marca: string,
    public anno: number,
    public modello: string
  ) {}

  dettagli(): string {
    return (
      `Marca: ` +
      this.marca +
      ", Modello: " +
      this.modello +
      ", Anno: " +
      this.anno +
      "."
    );
  }
}

const auto1 = new Auto("Ferrari", 2025, "SF90 Stradale");
console.log(auto1.dettagli());
