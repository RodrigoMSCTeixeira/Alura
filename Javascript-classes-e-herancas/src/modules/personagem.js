export class Personagem {
  nome;
  vida = 100;
  mana = 199;
  #level;
  tipo;
  descricao;

  constructor(nome) {
    this.nome = nome;

    //Encapsulamento
    this.#level = 1;
  }

  aumentarLevel() {
    this.level += 1;
  }

  diminuirLevel() {
    this.level -= 1;
  }

  get level() {
    return this.#level;
  }

  set level(novoLevel) {
    if (novoLevel >= 1 && novoLevel <= 10) {
      this.#level = novoLevel;
    }
  }

  obterInsgnia() {
    if (this.#level >= 5) {
      return `Implacável ${this.constructor.tipo}`;
    }

    return `${this.constructor.tipo} Iniciante`;
  }

  static verificarVencedor(personagem1, personagem2) {
    if (personagem1.level === personagem2.level) {
      return "Empate!";
    }

    if (personagem1.level > personagem2.level) {
      return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`;
    }

    return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`;
  }
}
