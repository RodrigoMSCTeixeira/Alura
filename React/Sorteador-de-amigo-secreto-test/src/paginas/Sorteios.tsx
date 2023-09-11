import { useState } from "react";
import { useListaDeParticipante } from "../state/hooks/useListaDeParticipante";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import styles from "./Sorteio.module.css";

const Sorteio = () => {
  const participantes = useListaDeParticipante();

  const [participanteDaVez, setParticipanteDaVez] = useState("");
  const [amigoSecreto, setAmigoSecreto] = useState("");

  const resultado = useResultadoSorteio();

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };
  return (
    <section className={styles.sorteio}>
      <form onSubmit={sortear}>
        <select
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={(evento) => setParticipanteDaVez(evento.target.value)}
        >
          <option>Selecione seu nome</option>
          {participantes.map((participante) => (
            <option key={participante}>{participante}</option>
          ))}
        </select>
        <button className={styles["botao-sortear"]}>Sortear</button>
      </form>

      {amigoSecreto && <p role="alert">{amigoSecreto}</p>}

      <footer className={styles.sorteio}>
        <img
          src="/imagens/aviao.png"
          className="aviao"
          alt="Um desenho de um avião de papel"
        />
      </footer>
    </section>
  );
};

export default Sorteio;
