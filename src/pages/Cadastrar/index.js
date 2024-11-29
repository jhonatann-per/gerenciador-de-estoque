import { useState } from "react"
import { Menu } from "../../components/Menu"
import { Navigate } from "react-router-dom"
import { 
    Container, ConteudoTitulo, 
    Titulo, BotaoAcao, ButtonInfo, 
    Hr, ButtonSuccess, Form, Label, 
    Input, AlertError } from '../../styles/styles_global'
import { Link } from "react-router-dom"


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
        // setStatus({
        //     type: 'error',
        //     mensagem: 'Erro: Produto Não Cadastrado.'
        // });
        setStatus({
            type: 'redSuccess',
            mensagem: 'Produto Cadastrado Com Sucesso!'
        })
        
    }

    return(
        <Container>
            <Menu/>
            
            <ConteudoTitulo>
                <Titulo>Cadastrar</Titulo>
                <BotaoAcao>
                    <Link to="/listar">
                        <ButtonInfo type="button" >Listar</ButtonInfo>
                    </Link>
                </BotaoAcao>
            </ConteudoTitulo>

            {status.type === 'error' ? <AlertError>{status.mensagem}</AlertError> :""}
            {status.type === 'success' ? <p style={{color: "green"}}>{status.mensagem}</p> :""}
            {status.type === 'redSuccess' && (
            <Navigate 
                to="/listar" 
                state={{ type: 'success', mensagem: status.mensagem }} 
                replace 
            />
)}
            <Hr />

            <Form onSubmit={addProduto}>
                <Label>Nome:</Label>
                <Input 
                    type="text" name="nome" 
                    placeholder="Nome Do Produto" 
                    onChange={valueInput}
                /> <br></br>

                <Label>Preço:</Label>
                <Input 
                    type="text" name="valor" 
                    placeholder="Preço Do Produto" 
                    onChange={valueInput}
                /> <br></br>
                
                <Label>Quantidade:</Label>
                <Input 
                    type="number" 
                    name="quantidade" 
                    placeholder="Quantidade De Produtos" 
                    onChange={valueInput}
                /> <br></br>
            
                <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    )
}