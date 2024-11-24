import { useState } from "react"
import { Menu } from "../../components/Menu"
import { Navigate } from "react-router-dom"
import { Container, ConteudoTitulo, Titulo} from '../../styles/styles_global'

export const Cadastrar = () =>{

    const [produto, setProduto] = useState({
        nome: '',
        valor: '',
        quantidade: ''
    })

    const [status, setStatus] = useState({
        type: '',
        mensagem:''
    })

    const valueInput = e => setProduto({
         ...produto,
          [e.target.name]: e.target.value
        })

    const addProduto = async e => {
        e.preventDefault()
        console.log("Nome: " + produto.nome)
        setStatus({
            type: 'error',
            mensagem: 'Erro: Produto Não Cadastrado.'
        });
        // setStatus({
        //     type: 'redSuccess',
        //     mensagem: 'Produto Cadastrado Com Sucesso!'
        // })
    }

    return(
        <Container>
            <Menu/>
            
            <ConteudoTitulo>
                <Titulo>Cadastrar</Titulo>
            </ConteudoTitulo>

            {status.type === 'error' ? <p style={{color: "#ff0000"}}>{status.mensagem}</p> :""}
            {status.type === 'success' ? <p style={{color: "green"}}>{status.mensagem}</p> :""}
            {status.type === 'redSuccess' && (
            <Navigate to="/listar" state={{ type: 'success', mensagem: status.mensagem }} replace />
)}


            <form onSubmit={addProduto}>
                <label>Nome:</label>
                <input type="text" name="nome" placeholder="Nome Do Produto" onChange={valueInput}/> <br></br>

                <label>Preço:</label>
                <input type="text" name="valor" placeholder="Preço Do Produto" onChange={valueInput}/> <br></br>
                
                <label>Quantidade:</label>
                <input type="number" name="quantidade" placeholder="Quantidade De Produtos" onChange={valueInput}/> <br></br>
            
            <button type="submit">Cadastrar</button>
            </form>
        </Container>
    )
}