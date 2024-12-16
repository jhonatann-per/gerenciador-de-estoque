import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { Link, useParams, useLocation } from "react-router-dom";
import { Container, ConteudoTitulo, Titulo, BotaoAcao, ButtonInfo, Hr, AlertError, AlertSuccess } from '../../styles/styles_global';
import { ConteudoVisualizar } from "./styles";
import api from "../../config/configApi";

export const Visualizar = (props) => {

    const { id } = useParams();
    const [data, setData] = useState([]);
    const { state } = useLocation();
    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    });

    useEffect(() => {
        const getProduto = async () => {
            try {
                const headers = {
                    'headers': {
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                };

                const response = await api.get(`/visualizar/${id}`, headers);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                if (error.response) {
                    setStatus({
                        type: "error",
                        mensagem: "Erro: Dados de produto não encontrado!"
                    });
                } else {
                    setStatus({
                        type: "error",
                        mensagem: "Erro: Falha na solicitação! Tente novamente mais tarde."
                    });
                }
            }
        };

        getProduto();
    }, [id]);

    return (
        <Container>
            <Menu />
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo type="button">Listar</ButtonInfo>
                    </Link>
                    <Link to={`/editar/${id}`}>
                        <ButtonInfo type="button">Editar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <Hr />

            {status.type === "success" && <AlertSuccess>{status.mensagem}</AlertSuccess>}
            {status.type === 'error' && <AlertError>{status.mensagem}</AlertError>}

            <ConteudoVisualizar>Produto: {data.nome}</ConteudoVisualizar>
            <ConteudoVisualizar>Valor: {data.preco_venda}</ConteudoVisualizar>
            <ConteudoVisualizar>Quantidade: {data.quantidade}</ConteudoVisualizar>
            <ConteudoVisualizar>Preço de Compra: {data.preco_compra}</ConteudoVisualizar>
        </Container>
    );
}
