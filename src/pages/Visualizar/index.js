import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { useParams } from "react-router-dom";
import { Container, ConteudoTitulo, Titulo} from '../../styles/styles_global'


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
            <h1>Visualizar</h1>
            <span> {data.id} </span>
            <span> {data.nome} </span>
            <span> {data.valor} </span>
            <span> {data.quantidade} </span>
        </Container>
    )
}