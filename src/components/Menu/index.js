import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
    return(
        <div>
            <Link to="/listar">Listar</Link>
            <Link to="/cadastrar">Cadastrar</Link>
            
        </div> 
    )
}