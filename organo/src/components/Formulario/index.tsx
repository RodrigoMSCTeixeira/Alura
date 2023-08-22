import { useState } from "react";
import Botao from "../Botao/index";
import CampoTexto from "../CampoTexto/index";
import ListaSuspensa from "../ListaSuspensa/index";
import "./Formulario.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
}

const Formulario = (props: FormularioProps) => {
  // const times = [
  //   "Programação",
  //   "Front-End",
  //   "Data Science",
  //   "Devops",
  //   "UX e Design",
  //   "Mobile",
  //   "Inovação e Gestão",
  // ];

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
      data,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    setData("");
  };

  return (
    <section className="formulario">
      <form onSubmit={(evento) => aoSalvar(evento)}>
        <h2>Preencha os dados para criar o cardo do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <CampoTexto
          label="Data de entrada no time"
          placeholder=""
          valor={data}
          aoAlterado={(valor) => setData(valor)}
          tipo="date"
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
