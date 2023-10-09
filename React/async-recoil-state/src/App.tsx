import "./App.css";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import UserForm from "./pages/UserForm";

function App() {
  return (
    <>
      <div className="App">
        <Menu nomeDoMenu="institucionais" />
        <Menu nomeDoMenu="transparencia" />
        <Menu nomeDoMenu="documentos-eletronicos" />
        <Menu nomeDoMenu="legislacao-e-atos" />
        <Menu nomeDoMenu="escola-fazendaria" />
        <Home />
        <UserForm />
      </div>
    </>
  );
}

export default App;
