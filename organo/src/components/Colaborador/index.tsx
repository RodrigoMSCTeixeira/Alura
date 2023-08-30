import { IColaborador } from "../../shared/interfaces/IColaborador";
import "./Colaborador.css";

interface ColaboradorProps extends IColaborador {
  corDeFundo: string;
  aoDeletar: () => void;
}

const Colaborador = ({
  nome,
  cargo,
  imagem,
  corDeFundo,
  data,
  aoDeletar,
}: ColaboradorProps) => {
  return (
    <div className="colaborador">
      <div className="deletar" onClick={aoDeletar}>
        Deletar
      </div>
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <h5>{new Date(data).toLocaleDateString()}</h5>
      </div>
    </div>
  );
};

export default Colaborador;
