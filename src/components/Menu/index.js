import React from "react";
import { Header, NavList, Button } from "./styles";

export const Menu = () => {
    return (
        <Header>
            <NavList>
                <Button to="/listar">Listar</Button>
                <Button to="/cadastrar">Cadastrar</Button>
                <Button to="/dashboard">Dashboard</Button>
            </NavList>
        </Header>
    );
};
