import React from "react"
import { Menu } from "../../components/Menu"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { 
    Container, ConteudoTitulo, 
    Titulo, BotaoAcao, Hr,
    ButtonInfo, ButtonVisualizar,
    Label, Input, Form } from "../../styles/styles_global";
import { Link } from "react-router-dom";
import { ButtonSalvar } from "./styles";

export const Editar = (props) =>{

    const {id} = useParams();
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    console.log(props.id)
    
    const editarProduto = async e =>{
        e.preventDefault();
        alert("Nome: " + nome + " valor: R$" + valor )
    }

    useEffect(() =>{
        const getProduto = async () => {
            setNome("Mouse");
            setValor(59.99);
            setQuantidade(100);
        }
        getProduto();
    },[id])

    return(
        <Container>
            <Menu/>

            <ConteudoTitulo>
                <Titulo>Editar</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo type="button" >Listar</ButtonInfo>
                    </Link>
                    <Link to={"/visualizar/" + id}>
                        <ButtonVisualizar type="button" >Visualizar</ButtonVisualizar>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <Hr />

            <Form onSubmit={editarProduto} >
                <Label >Nome:</Label>
                <Input type="text" name="nome" 
                placeholder="Nome Do Produto" value={nome} 
                onChange={e => setNome(e.target.value)}/> <br></br>

                <Label>Valor:</Label>
                <Input type="text" name="valor"
                 placeholder="Preço Do Produto" value={valor}
                 onChange={e => setValor(e.target.value)}/> <br></br>
                
                <Label>Quantidade:</Label>
                <Input type="number" name="quantidade"
                 placeholder="Quantidade De Produtos" value={quantidade}
                 onChange={e => setQuantidade(e.target.value)}
                /> <br></br>
            
                <ButtonSalvar type="submit">Salvar Alteração</ButtonSalvar>
            </Form>
        </Container>
    )
}