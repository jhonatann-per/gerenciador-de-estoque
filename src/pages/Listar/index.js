import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu";
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonSuccess, ButtonVisualizar, AlertError } from '../../styles/styles_global';
import { Table, ButtonEditar, ButtonApagar, AlertSucess } from "./styles";
import api from "../../config/configApi";

export const Listar = () => {

    const { state } = useLocation();
    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    });
    const [data, setData] = useState([]);
    
    const listarProduto = async () => {
        const headers = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };

        await api.get("/listar", headers)
        .then((response) => {
            setData(response.data.produtos); 
        })
        .catch((error) => {
            console.error("Erro ao listar produtos:", error);
            if (error.response) {
                setStatus({
                    type: "error",
                    mensagem: error.response.data.mensagem
                });
            } else {
                setStatus({
                    type: "error",
                    mensagem: "Erro: Tente novamente mais tarde!"
                });
            }
        });
    };

    useEffect(() => {
        listarProduto();
    }, []);

    const apagarProduto = async (idProduto) => {
        try {
            const headers = {
                'headers': {
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            };
            const response = await api.delete(`/deletar-produto/${idProduto}`, headers);
            setStatus({
                type: "success",
                mensagem: response.data.mensagem
            });
            setData(data.filter(produto => produto.id !== idProduto));
        } catch (error) {
            setStatus({
                type: "error",
                mensagem: "Erro ao apagar produto!"
            });
        }
    };

    const confirmarApagar = (produto) => {
        const confirmacao = window.confirm(`Tem certeza que deseja apagar o produto?\n\nID: ${produto.id}\nNome: ${produto.nome}\nPreço: ${produto.preco_venda}`);
        if (confirmacao) {
            apagarProduto(produto.id);
        }
    };

    return (
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

            {status.type === "success" && <AlertSucess>{status.mensagem}</AlertSucess>}
            {status.type === 'error' && <AlertError>{status.mensagem}</AlertError>}

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
                    {Array.isArray(data) && data.length > 0 ? (
                        data.map(produto => (
                            <tr key={produto.id}>
                                <td>{produto.id}</td>
                                <td>{produto.nome}</td>
                                <td>{produto.preco_venda}</td>
                                <td>{produto.quantidade}</td>
                                <td>
                                    <Link to={"/visualizar/" + produto.id}><ButtonVisualizar>Visualizar</ButtonVisualizar></Link>
                                    <Link to={"/editar/" + produto.id}><ButtonEditar>Editar</ButtonEditar></Link>
                                    <ButtonApagar onClick={() => confirmarApagar(produto)}>Apagar</ButtonApagar>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">Nenhum produto encontrado</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};
