import "./Botao.css";

const Botao = (props) => {
  return (
    <button className="botao" type={props.tipo}>
      {props.children}
    </button>
  );
};

export default Botao;
