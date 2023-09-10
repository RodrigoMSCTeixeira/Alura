import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import ListaParticipantes from "./ListaParticipantes";
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante";

jest.mock("../state/hooks/useListaDeParticipante", () => {
  return {
    useListaDeParticipante: jest.fn(),
  };
});

describe("uma lista vazia de participantes", () => {
  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue([]);
  });

  test("deve ser renderizado sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(0);
  });
});

describe("uma lista preenchida de participantes", () => {
  const participantes = ["Ana", "Catarina"];

  beforeEach(() => {
    (useListaDeParticipante as jest.Mock).mockReturnValue(participantes);
  });

  test("deve ser renderizado sem elementos", () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(participantes.length);
  });
});
