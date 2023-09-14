import { useRecoilValue, useSetRecoilState } from "recoil";
import { nomeDoMenuState } from "../atom";
import { menu } from "../seletores";

function useListaDeMenus(nomeDoMenu: string) {
  const setMenu = useSetRecoilState(nomeDoMenuState);
  setMenu(nomeDoMenu);
  return useRecoilValue(menu);
}

export default useListaDeMenus;
