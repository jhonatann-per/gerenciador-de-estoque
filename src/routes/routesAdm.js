import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home"; 
import { Dashboard } from "../pages/Dashboard";
import { Listar } from "../pages/Listar";
import { Visualizar } from "../pages/Visualizar";
import { Cadastrar } from "../pages/Cadastrar";
import { Editar } from "../pages/Editar";
import { Login } from "../pages/Login";
import { Context } from "../Context/AuthContext";


const PrivateRoute = ({ element, ...rest }) => {
  const { authenticated, valUser } = useContext(Context);
  valUser();
  return authenticated ? element : <Navigate to="/" />;

};

const RoutesAdm = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />
      <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
      <Route path="/cadastrar" element={<PrivateRoute element={<Cadastrar />} />} />
      <Route path="/editar/:id" element={<PrivateRoute element={<Editar />} />} />
      <Route path="/listar" element={<PrivateRoute element={<Listar />} />} />
      <Route path="/visualizar/:id" element={<PrivateRoute element={<Visualizar />} />} />
    </Routes>
  );
};

export default RoutesAdm;
