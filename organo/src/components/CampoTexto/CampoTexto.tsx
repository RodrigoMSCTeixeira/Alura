import React, { useState } from "react";
import "./CampoTexto.css";

interface CampoTextoProps {
  placeholder: string;
  aoAlterado: (valor: string) => void;
  label: string;
  obrigatorio: boolean;
}

export const CampoTexto = ({
  aoAlterado,
  label,
  obrigatorio,
  placeholder,
}: CampoTextoProps) => {
  const placeholderModificada = `${placeholder}...`;

  //let valor = "";

  //Valor em si e um setter
  const [valor, setValor] = useState("");

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value);
    setValor(evento.target.value);
    //valor = evento.target.value;
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};
