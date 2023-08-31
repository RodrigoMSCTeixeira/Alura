import { useState } from "react";
import Botao from "../Botao/index";
import Campo from "../Campo/index";
import ListaSuspensa from "../ListaSuspensa/index";
import "./Formulario.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { v4 as uuidv4 } from "uuid";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void;
  times: string[];
  cadastrarTime: (novoTime: any) => void;
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
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");
  const id = uuidv4();

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      id,
      nome,
      cargo,
      imagem,
      time,
      favorito: false,
      // data,
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
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <Campo
          tipo="text"
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          tipo="text"
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          tipo="text"
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <Campo
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
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          props.cadastrarTime({ nome: nomeTime, cor: corTime });
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          tipo="color"
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do time"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />

        <Botao>Criar um novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
