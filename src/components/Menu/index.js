import React from "react";
import { Link } from "react-router-dom";
import { Header, NavList, Button } from "./styles";

export const Menu = () => {
    return (
        <Header>
            <NavList>
                <Button><Link to="/listar">Listar</Link></Button>
                <Button><Link to="/cadastrar">Cadastrar</Link></Button>
                <Button><Link to="/dashboard">Dashboard</Link></Button>
            </NavList>
        </Header>
    );
};
