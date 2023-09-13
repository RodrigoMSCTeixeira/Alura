import React from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador.js";
import Colaborador from "../Colaborador/index";
import "./Time.css";
import hexToRgba from "hex-to-rgba";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  time: {
    id: string;
    nome: string;
    cor: string;
    corSecundaria: string;
  };
  colaboradores: IColaborador[];
  aoDeletar: (id: string) => void;
  mudarCor: (cor: string, nome: string) => void;
  aoFavoritar: (id: string) => void;
}

const Time = ({
  colaboradores,
  corPrimaria,
  corSecundaria,
  time,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section
      className="time"
      style={{ backgroundColor: hexToRgba(corSecundaria, 0.6) }}
    >
      <input
        onChange={(evento) => mudarCor(evento.target.value, time.id)}
        value={corSecundaria}
        type="color"
        className="input-cor"
      />
      <h3 style={{ borderColor: corPrimaria }}>{time.nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador, indice) => {
          return (
            <Colaborador
              key={indice}
              colaborador={colaborador}
              corDeFundo={time.corSecundaria}
              // data={colaborador.data}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
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
