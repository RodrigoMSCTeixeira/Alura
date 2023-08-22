import React, { useState } from "react";
import "./CampoTexto.css";

interface CampoTextoProps {
  placeholder: string;
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number";
}

export const CampoTexto = ({
  aoAlterado,
  label,
  placeholder,
  obrigatorio = false,
  tipo = "text",
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
        type={tipo}
      />
    </div>
  );
};
