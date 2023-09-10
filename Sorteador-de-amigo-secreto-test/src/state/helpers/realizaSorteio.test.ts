import { realizarSorteio } from "./realizarSorteio";

describe("dado um sorteio de um amigo secreto", () => {
  test("cada particiante não sorteie o próprio nome", () => {
    const particiantes = [
      "Ana",
      "Catarina",
      "Juliana",
      "Joao",
      "Vinicios",
      "Nathalia",
    ];

    const sorteio = realizarSorteio(particiantes);
    particiantes.forEach((participante) => {
      const amigoSecreto = sorteio.get(participante);
      expect(amigoSecreto).not.toEqual(participante);
    });
  });
});
