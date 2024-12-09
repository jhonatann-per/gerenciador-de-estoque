import { useState } from "react"
import { Menu } from "../../components/Menu"
import { Navigate } from "react-router-dom"
import { 
    Container, ConteudoTitulo, 
    Titulo, BotaoAcao, ButtonInfo, 
    Hr, ButtonSuccess, Form, Label, 
    Input, AlertError } from '../../styles/styles_global'
import { Link } from "react-router-dom"
import api from "../../config/configApi"


export const Cadastrar = () =>{

    const [produto, setProduto] = useState({
        nome: '',
        preco_venda: '',
        preco_compra: '',
        quantidade: ''
    })

    const sendValueInput = e => setProduto({
         ...produto,
          [e.target.name]: e.target.value
        })

    const addProduto = async e => {
        e.preventDefault()
        
        try{
            const response = await api.post('/cadastrar', produto);
            setStatus({
                type: "success",
                mensagem: "Produto Cadastrado Com Sucesso!"
            })
        } catch(error) {
            if(error.response){
                setStatus({
                    type: 'error',
                    mensagem: error.response.data.mensagem
                });
            } else {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro: Produto não Cadastrado. Tente Novamente.'
                })
            }
        }
        
    }

    const [status, setStatus] = useState({
        type: '',
        mensagem:''
    })

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
                    onChange={sendValueInput}
                /> <br></br>
                
                <Label>Preço de Compra:</Label>
                <Input 
                    type="text" 
                    name="preco_compra" 
                    placeholder="Preço de Compra" 
                    onChange={sendValueInput}
                /> <br></br>

                <Label>Preço:</Label>
                <Input 
                    type="text" 
                    name="preco_venda" 
                    placeholder="Preço Do Produto" 
                    onChange={sendValueInput}
                /> <br></br>
                
                <Label>Quantidade:</Label>
                <Input 
                    type="number" 
                    name="quantidade" 
                    placeholder="Quantidade De Produtos" 
                    onChange={sendValueInput}
                /> <br></br>
                
                <ButtonSuccess type="submit">Cadastrar</ButtonSuccess>
            </Form>
        </Container>
    )
}