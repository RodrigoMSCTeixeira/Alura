import React, { useState } from "react";
import "./Campo.css";

interface CampoProps {
  placeholder: string;
  aoAlterado: (valor: string) => void;
  label: string;
  valor: string;
  obrigatorio?: boolean;
  tipo?: "text" | "password" | "date" | "email" | "number" | "color";
}

export const Campo = ({
  aoAlterado,
  label,
  placeholder,
  obrigatorio = false,
  tipo = "text",
}: CampoProps) => {
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
    <div className={`campo campo-${tipo}`}>
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
