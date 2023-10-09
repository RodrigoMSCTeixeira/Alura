import { create } from "zustand";

type TMenu = {
  term_id: number;
  name: string;
  items: [
    {
      ID: number;
      title: string;
    }
  ];
};

type State = {
  menus: TMenu;
};

type Actions = {
  getMenu: (nomeDoMenu: string) => Promise<void>;
};

const INITIAL_STATE: State = {
  menus: {} as TMenu,
};

const useListaDeMenusZu = create<State & Actions>((set) => ({
  menus: INITIAL_STATE.menus,
  getMenu: async (nomeDoMenu) => {
    const responseHttp = await fetch(`
      https://portal-admin.sefaz.pi.gov.br/wp-json/menus/v1/menus/${nomeDoMenu}`);
    const menusJson = await responseHttp.json();
    set({ menus: menusJson });
  },
}));

export default useListaDeMenusZu;
