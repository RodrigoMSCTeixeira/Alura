import { useState } from "react";
import "./CampoTexto.css";

export const CampoTexto = (props) => {
  const placeholderModificada = `${props.placeholder}...`;

  //let valor = "";

  //Valor em si e um setter
  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
    setValor(evento.target.value);
    //valor = evento.target.value;
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
