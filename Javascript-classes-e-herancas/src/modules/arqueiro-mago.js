import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";
import { Personagem } from "./personagem.js";

export class ArqueroMago extends Personagem {
  ladoArqueiro;
  ladoMago;
  static tipo = "ArqueiroMago";
  static descricao = "Detentor de lancas e flechas mágicas!";

  constructor(
    nome,

    destreza,
    elementoMagico,
    levelMagico,
    inteligencia
  ) {
    super(nome);
    this.ladoArqueiro = new Arqueiro(nome, destreza);
    this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia);
  }

  obterInsgnia() {
    return `${this.ladoArqueiro.obterInsgnia()} e ${this.ladoMago.obterInsgnia()}`;
  }
}
