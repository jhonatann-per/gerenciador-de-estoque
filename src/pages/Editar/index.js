import React from "react"
import { Menu } from "../../components/Menu"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react"

export const Editar = (props) =>{

    const {id} = useParams;
    const [nome, setNome] = useState("");
    const [valor, setValor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    
    const editeProduto = async e =>{
        e.preventDefault();
        console.log("Nome" + nome)
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
        <div>
            <Menu/>
            <form onSubmit={editeProduto} >
                <label >Nome:</label>
                <input type="text" name="nome" 
                placeholder="Nome Do Produto" value={nome} 
                onChange={e => setNome(e.target.value)}/> <br></br>

                <label>Valor:</label>
                <input type="text" name="valor"
                 placeholder="Preço Do Produto" value={valor}
                 onChange={e => setValor(e.target.value)}/> <br></br>
                
                <label>Quantidade:</label>
                <input type="number" name="quantidade"
                 placeholder="Quantidade De Produtos" value={quantidade}
                 onChange={e => setQuantidade(e.target.value)}
                /> <br></br>
            
                <button type="submit">Salvar</button>
            </form>
        </div>
    )
}