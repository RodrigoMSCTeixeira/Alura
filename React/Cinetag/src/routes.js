import Inicio from "pages/Inicio";
import Favoritos from "pages/Favoritos";
import Player from "pages/Player";
import NaoEncontrado from "pages/NaoEncontrado/NaoEncontrado";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaBase from "pages/PaginaBase";

//Nested Routes

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrado />}></Route>
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default AppRoutes;
