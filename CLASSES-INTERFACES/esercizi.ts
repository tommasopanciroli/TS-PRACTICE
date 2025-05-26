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
