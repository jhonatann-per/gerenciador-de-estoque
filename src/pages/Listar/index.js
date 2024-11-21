import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Listar = () =>{
    
    const { state } = useLocation();
    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    })
    const [data, setData] = useState([]);

    const listarProduto = async => {
        var produto = [
            {
                "id": 1,
                "nome": "Teclado",
                "valor": 120.00,
                "quantidade": 25
            },
            {
                "id": 2,
                "nome": "Mouse",
                "valor": 80.00,
                "quantidade": 25
            },
            {
                "id": 3,
                "nome": "Caderno",
                "valor": 20.00,
                "quantidade": 25
            }
        ] 
        setData(produto);

    }

    useEffect(() =>{
        listarProduto();
    },[])

    const apagarProduto = async (idProduto) =>{
        console.log("Produto apagado:" + idProduto)
    }

    return(
        <div>
            <h1>Listar</h1>

            {status.type === "success" ? <p style={{color: "blue"}}>{status.mensagem}</p> : ""}

            <Link to="/cadastrar"><button type="button">Cadastrar</button></Link>
            <hr></hr>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td>Valor</td>
                    <td>Quantidade</td>
                </tr>
            </thead>
            <tbody>
                {data.map(produto =>(
                    <tr key={produto.id}>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td>{produto.valor}</td>
                        <td>{produto.quantidade}</td>
                        <td>
                            <Link to={"/visualizar/" + produto.id} ><button>Visualizar</button></Link>
                            <Link to={"/editar/" + produto.id} ><button>Editar</button></Link>
                            <Link to={"#"}><button 
                            onClick={() => apagarProduto(produto.id)}
                            >Deletar</button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}