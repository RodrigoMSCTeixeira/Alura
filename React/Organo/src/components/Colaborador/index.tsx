import { IColaborador } from "../../shared/interfaces/IColaborador";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Colaborador.css";

interface ColaboradorProps {
  corDeFundo: string;
  colaborador: IColaborador;
  aoDeletar: (id: string) => void;
  aoFavoritar: (id: string) => void;
}

const Colaborador = ({
  colaborador,
  corDeFundo,
  // data,
  aoDeletar,
  aoFavoritar,
}: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
        {/* <h5>{new Date(data).toLocaleDateString()}</h5> */}
      </div>
    </div>
  );
};

export default Colaborador;
