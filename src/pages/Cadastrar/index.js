import { useState } from "react"
import { Menu } from "../../components/Menu"

export const Cadastrar = () =>{

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        quantidade: ''
    })

    const valueInput = e => setProduto({
         ...produto,
          [e.target.name]: e.target.value
        })

    const addProduto = async e => {
        e.preventDefault()
        console.log("Nome: " + produto.nome)
    }

    return(
        <div>
            <Menu/>
            <form onSubmit={addProduto}>
                <label>Nome:</label>
                <input type="text" name="nome" placeholder="Nome Do Produto" onChange={valueInput}/> <br></br>

                <label>Preço:</label>
                <input type="text" name="valor" placeholder="Preço Do Produto" onChange={valueInput}/> <br></br>
                
                <label>Quantidade:</label>
                <input type="number" name="quantidade" placeholder="Quantidade De Produtos" onChange={valueInput}/> <br></br>
            
            <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}