import { FormEvent, useState } from "react";
import user from "../../store/useUserStore";

function UserForm() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const addUser = user((state) => state.addUser);

  function aoSalvar(evento: FormEvent) {
    evento.preventDefault();
    addUser({
      name: nome,
      email: email,
    });
  }
  return (
    <div>
      <form onSubmit={aoSalvar}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default UserForm;
