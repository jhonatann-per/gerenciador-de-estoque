import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {Listar} from "./pages/Listar";
import {Visualizar} from "./pages/Visualizar";
import { Cadastrar } from "./pages/Cadastrar";
import { Editar } from "./pages/Editar";

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route exact path="/" Component={Dashboard} />
        <Route exact path="/cadastrar" Component={Cadastrar} />
        <Route exact path="/editar" Component={Editar} />
        <Route exact path="/listar" Component={Listar} />
        <Route exact path="/visualizar" Component={Visualizar} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
