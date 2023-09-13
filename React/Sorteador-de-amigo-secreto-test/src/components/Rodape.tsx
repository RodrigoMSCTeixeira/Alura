import { useNavigate } from "react-router-dom";
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante";
import styles from "./Rodape.module.css";
import { useSorteador } from "../state/hooks/useSorteador";

const Rodape = () => {
  const participantes = useListaDeParticipante();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara("/sorteio");
  };

  return (
    <footer className={styles["rodape-configuracoes"]}>
      <button
        className={styles.botao}
        disabled={participantes.length < 3}
        onClick={iniciar}
      >
        Iniciar Brincadeira
      </button>
    </footer>
  );
};

export default Rodape;
