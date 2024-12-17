import React, {useContext} from "react";
import { Header, NavList, Button } from "./styles";
import { Context } from "../../Context/AuthContext";

export const Menu = () => {
   const {handleLogout}= useContext(Context);
    return (
        <Header>
            <NavList>
                <Button to="/listar">Listar</Button>
                <Button to="/cadastrar">Cadastrar</Button>
                <Button to="/dashboard">Dashboard</Button>
                <Button to="#" onClick={handleLogout}>Sair</Button>
            </NavList>
        </Header>
    );
};
