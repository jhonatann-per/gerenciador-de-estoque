import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { 
    Container, ConteudoTitulo, 
    Titulo, BotaoAcao, 
    ButtonSuccess,  ButtonVisualizar, AlertError} from '../../styles/styles_global';
import { 
    Table, ButtonEditar, 
    ButtonApagar, AlertSucess } from "./styles";

import api from "../../config/configApi";

export const Listar = () => {
    
    const { state } = useLocation();
    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    });
    const [data, setData] = useState([]);

    const listarProduto = async () => {
        await api.get("/listar")
        .then((response) => {
           setData(response.data)
        })
        .catch((error) => {
            if(error.response){
                setStatus({
                    type: "error",
                    mensagem: error.response.data.mensagem
                })
            }else{
                setStatus({
                    type: "error",
                    mensagem: "Erro: Tenta mais tarde!"
                })
            }
        });
    };
    

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
            {status.type === 'error' ? <AlertError>{status.mensagem}</AlertError> :""}
            
            <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Funções</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(produto =>(
                        <tr key={produto.id}>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.preco_venda}</td>
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