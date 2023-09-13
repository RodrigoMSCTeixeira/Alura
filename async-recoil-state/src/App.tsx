import { Suspense } from "react";
import "./App.css";
import { RecoilRoot } from "recoil";

import Menu from "./components/Menu";

function App() {
  return (
    <>
      <RecoilRoot>
        <Suspense fallback="Está Carregando">
          <div className="App">
            <h1>Página de Teste</h1>
            <Menu nomeDoMenu="institucionais" />
          </div>
        </Suspense>
      </RecoilRoot>
    </>
  );
}

export default App;
