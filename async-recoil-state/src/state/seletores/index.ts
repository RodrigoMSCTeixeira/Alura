import { selector, selectorFamily } from "recoil";
import { IMenu } from "../../utils/interfaces/IMenu";
import { nomeDoMenuState } from "../atom";

const menusAsync = selectorFamily({
  key: "menusAsync",
  get: (nomeDoMenu: string) => async () => {
    const responseHttp = await fetch(`
      https://portal-admin.sefaz.pi.gov.br/wp-json/menus/v1/menus/${nomeDoMenu}`);
    const menusJson: IMenu = await responseHttp.json();
    return menusJson;
  },
});

export const menu = selector({
  key: "menu",
  get: ({ get }) => get(menusAsync(get(nomeDoMenuState))),
});
