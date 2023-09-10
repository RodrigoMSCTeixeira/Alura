import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante";

jest.mock("../state/hooks/useListaDeParticipante", () => {
  return {
    useListaDeParticipante: jest.fn(),
  };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();

jest.mock("../state/hooks/useSorteador", () => {
  return {
    useSorteador: () => mockSorteio,
  };
});

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavegacao,
  };
});

describe("onde não existem participantes suficiente", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([]);
  });

  test("a brincandeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).toBeDisabled();
  });
});

describe("quando existem participantes suficiente", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([
      "Ana",
      "Catarina",
      "Josefina",
    ]);
  });

  test("a brincandeira não pode ser iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    expect(botao).not.toBeDisabled();
  });

  test("a brincandeira foi iniciada", () => {
    render(
      <RecoilRoot>
        <Rodape />
      </RecoilRoot>
    );

    const botao = screen.getByRole("button");
    fireEvent.click(botao);

    expect(mockNavegacao).toHaveBeenCalledTimes(1);
    expect(mockNavegacao).toHaveBeenCalledWith("/sorteio");
    expect(mockSorteio).toHaveBeenCalledTimes(1);
  });
});
