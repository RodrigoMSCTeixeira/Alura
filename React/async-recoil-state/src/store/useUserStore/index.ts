import { create } from "zustand";

type UserType = {
  name: string;
  email: string;
};

type State = {
  users: UserType[];
  addUser: (user: UserType) => void;
};

const user = create<State>((set) => ({
  users: [],
  addUser: (user: UserType) => {
    set((state) => ({ users: [...state.users, user] }));
  },
}));

export default user;
