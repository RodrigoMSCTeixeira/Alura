import { IColaborador } from "../../shared/interfaces/IColaborador.js";
import Colaborador from "../Colaborador/index";
import "./Time.css";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: IColaborador[];
}

const Time = ({
  colaboradores,
  corPrimaria,
  corSecundaria,
  nome,
}: TimeProps) => {
  return colaboradores.length > 0 ? (
    <section className="time" style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    <React.Fragment></React.Fragment>
  );
};

export default Time;
