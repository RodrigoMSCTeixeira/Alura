import { Suspense, useEffect, useState } from "react";
import useListaDeMenus from "../../state/hooks/useListaDeMenus";

interface Props {
  nomeDoMenu: string;
}

function Menu({ nomeDoMenu }: Props) {
  const { name } = useListaDeMenus(nomeDoMenu);
  const [nome, setNome] = useState("State");

  useEffect(() => {
    console.log(nomeDoMenu);
  }, []);

  return (
    <div>
      <h1>Testando Requisição</h1>
      <div>
        <h1>{nome}</h1>
      </div>
    </div>
  );
}

export default Menu;
