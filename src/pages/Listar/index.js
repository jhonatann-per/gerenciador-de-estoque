import React, { useEffect, useState } from "react";

export const Listar = () =>{
    const [data, setData] = useState([]);

    const listarProdutos = async => {
        var produtos = [
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
        setData(produtos);
        console.log('Esta é uma mensagem de log');

    }

    useEffect(() =>{
        listarProdutos();
    },[])

    return(
        <div>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nome</td>
                    <td>Valor</td>
                    <td>Quantidade</td>
                </tr>
            </thead>
            <tbody>
                {data.map(produtos =>(
                    <tr key={produtos.id}>
                        <td>{produtos.id}</td>
                        <td>{produtos.nome}</td>
                        <td>{produtos.valor}</td>
                        <td>{produtos.quantidade}</td>
                        <td>Visualizar Editar Apagar</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}