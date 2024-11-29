import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container, 
    ConteudoTitulo, 
    Titulo, 
    BotaoAcao, 
    ButtonInfo,
    Hr
} from '../../styles/styles_global'
import { ConteudoVisualizar } from "./styles";


export const Visualizar = (props) =>{

    const {id} = useParams();
    const [data, setData] = useState([])

    useEffect(() =>{
        const getProduto = async () => {
            setData(
                {
                    id: 1,
                    nome: "Teclado",
                    valor: 120.00,
                    quantidade: 25
                },
                
            )
        }
        getProduto();

    },[id])
    
    return(
        <Container>
            <Menu/>
            <ConteudoTitulo>
                <Titulo>Visualizar</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo type="button" >Listar</ButtonInfo>
                    </Link>
                    <Link to={"/editar/" + data.id}>
                        <ButtonInfo type="button" >Editar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>
            <Hr/>

            <ConteudoVisualizar> ID: {data.id} </ConteudoVisualizar>
            <ConteudoVisualizar> Produto: {data.nome} </ConteudoVisualizar>
            <ConteudoVisualizar> Valor: {data.valor} </ConteudoVisualizar>
            <ConteudoVisualizar> Quantidade: {data.quantidade} </ConteudoVisualizar>
        </Container>
    )
}