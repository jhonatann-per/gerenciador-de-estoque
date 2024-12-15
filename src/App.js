import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Listar } from "./pages/Listar";
import { Visualizar } from "./pages/Visualizar";
import { Cadastrar } from "./pages/Cadastrar";
import { Editar } from "./pages/Editar";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/editar/:id" element={<Editar />} />
        <Route path="/listar" element={<Listar />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
