import React from "react";
import { Menu } from "../../components/Menu";
import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import { Container, ConteudoTitulo, Titulo, 
    BotaoAcao, Hr, ButtonInfo, ButtonVisualizar,
     Label, Input, Form, AlertError, AlertSuccess } from "../../styles/styles_global";
import { Link } from "react-router-dom";
import { ButtonSalvar } from "./styles";
import api from "../../config/configApi";

export const Editar = (props) => {

    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [precoDeCompra, setPrecoDeCompra] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const { state } = useLocation();
    const [status, setStatus] = useState({
        type: state ? state.type : "",
        mensagem: state ? state.mensagem : ""
    });

    useEffect(() => {
        getProduto();
    }, [id]);

    const getProduto = async () => {
        try {
            const response = await api.get(`/visualizar/${id}`);
            setNome(response.data.nome);
            setPrecoDeCompra(response.data.preco_compra);
            setValor(response.data.preco_venda);
            setQuantidade(response.data.quantidade);
        } catch (error) {
            setStatus({
                type: "error",
                mensagem: "Erro: Não foi possível buscar os dados do produto."
            });
        }
    }

    const editarProduto = async e => {
        e.preventDefault();
        const precoCompraFloat = parseFloat(precoDeCompra);
        const precoVendaFloat = parseFloat(valor);
        if (isNaN(precoCompraFloat) || isNaN(precoVendaFloat)) {
            setStatus({
                type: 'error',
                mensagem: 'Erro: Valores de preços de compra ou venda não são números válidos.'
            });
            return;
        }

        try {
            const response = await api.put('/editar-produto', {
                id,
                nome,
                preco_compra: precoCompraFloat,
                preco_venda: precoVendaFloat,
                quantidade
            });
            console.log('Resposta da atualização:', response.data); 
            setStatus({
                type: 'success',
                mensagem: 'Produto atualizado com sucesso!'
            });
        } catch (error) {
            console.error('Erro ao atualizar produto:', error); 
            setStatus({
                type: 'error',
                mensagem: 'Erro ao atualizar produto. Tente novamente mais tarde.'
            });
        }
    }

    return (
        <Container>
            <Menu />

            <ConteudoTitulo>
                <Titulo>Editar Produto</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo type="button">Listar</ButtonInfo>
                    </Link>
                    <Link to={`/visualizar/${id}`}>
                        <ButtonVisualizar type="button">Visualizar</ButtonVisualizar>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <Hr />

            {status.type === 'error' && <AlertError>{status.mensagem}</AlertError>}
            {status.type === 'success' && <AlertSuccess>{status.mensagem}</AlertSuccess>}

            <Form onSubmit={editarProduto}>
                <Label>Nome:</Label>
                <Input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome Do Produto" 
                    value={nome} 
                    onChange={e => setNome(e.target.value)}
                /> <br />

                <Label>Preço de Compra:</Label>
                <Input 
                    type="text" 
                    name="precoDeCompra" 
                    placeholder="Preço De Compra" 
                    value={precoDeCompra}
                    onChange={e => setPrecoDeCompra(e.target.value)}
                /> <br />

                <Label>Preço de Venda:</Label>
                <Input 
                    type="text" 
                    name="valor" 
                    placeholder="Preço De Venda" 
                    value={valor}
                    onChange={e => setValor(e.target.value)}
                /> <br />

                <Label>Quantidade:</Label>
                <Input 
                    type="number" 
                    name="quantidade" 
                    placeholder="Quantidade De Produtos" 
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                /> <br />

                <ButtonSalvar type="submit">Salvar Alteração</ButtonSalvar>
            </Form>
        </Container>
    );
}
