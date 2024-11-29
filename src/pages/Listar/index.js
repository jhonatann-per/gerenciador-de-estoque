import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
    Container, ConteudoTitulo, 
    Titulo, BotaoAcao, 
    ButtonSuccess,  ButtonVisualizar} from '../../styles/styles_global';
import { 
    Table, ButtonEditar, 
    ButtonApagar, AlertSucess } from "./styles";

import { Menu } from "../../components/Menu";

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
        alert("Produto apagado com sucesso ID do produto: " + idProduto)
    }

    return(
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Listar</Titulo>
                <BotaoAcao>
                    <Link to="/cadastrar">
                        <ButtonSuccess type="button">Cadastrar</ButtonSuccess>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === "success" ? <AlertSucess>{status.mensagem}</AlertSucess> : ""}

            
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Quantidade</th>
                        <th>Funções</th>
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
                                <Link to={"/visualizar/" + produto.id} ><ButtonVisualizar>Visualizar</ButtonVisualizar></Link>
                                <Link to={"/editar/" + produto.id} ><ButtonEditar>Editar</ButtonEditar></Link>
                                <Link to={"#"}><ButtonApagar
                                onClick={() => apagarProduto(produto.id)}
                                >Apagar</ButtonApagar>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            
        </Container>
    );
}