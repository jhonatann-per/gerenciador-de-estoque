import React from "react";
import { NavLink } from "react-router-dom";
import { NavList } from "./styles";

export const Menu = () => {
    return(
        <NavList>
            <NavLink to="/listar"><li>Listar</li></NavLink>
            <NavLink to="/"><li>Dashboard</li></NavLink>
        </NavList> 
    )
}