import React from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador.js";
import Colaborador from "../Colaborador/index";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: IColaborador[];
  aoDeletar: () => void;
}

const Time = ({
  colaboradores,
  corPrimaria,
  corSecundaria,
  nome,
  aoDeletar,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => {
          return (
            <Colaborador
              corDeFundo={corPrimaria}
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              data={colaborador.data}
              aoDeletar={aoDeletar}
            />
          );
        })}
      </div>
    </section>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Time;
