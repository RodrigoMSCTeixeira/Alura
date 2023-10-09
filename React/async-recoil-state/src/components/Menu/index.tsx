import { useEffect } from "react";
import useListaDeMenusZu from "../../store/useListaDeMenusZu";

interface Props {
  nomeDoMenu: string;
}

const Menu = ({ nomeDoMenu }: Props) => {
  const { menus, getMenu } = useListaDeMenusZu();

  useEffect(() => {
    getMenu(nomeDoMenu);
  }, [nomeDoMenu]);

  console.log(menus);
  return (
    <div>
      <h1>{menus.name}</h1>
      <div>
        <h1></h1>
      </div>
    </div>
  );
};

export default Menu;
