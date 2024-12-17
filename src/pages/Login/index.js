import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, LoginComponent, CamposInput, EnviarButton } from "./styles";
import { AlertError, AlertSuccess } from "../../styles/styles_global";
import api from "../../config/configApi";
import { Context } from "../../Context/AuthContext";

export const Login = () => {
    const { signIn } = useContext(Context);
    const navigate = useNavigate();
    
    const [user, setUser] = useState({
        email: '',
        senha: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: '',
        loading: false
    });

    const valorInput = e => setUser(
        { ...user, [e.target.name]: e.target.value });
    
    const LoginSubmit = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        setStatus({ loading: true });

        await api.post("/login", user, headers)
        .then((response) => {
            localStorage.setItem('token', response.data.token)
            signIn(true);
            setStatus({ 
                type: 'success', 
                mensagem: 'Login bem-sucedido!', 
                loading: false 
            });
            navigate("/dashboard", 
                { state: { 
                    type: 'success', 
                    mensagem: 'Login bem-sucedido!' 
            } });
        }).catch((err) => {
            if (err.response) {
                setStatus({
                    type: 'error',
                    mensagem: err.response.data.mensagem,
                    loading: false
                });
            } else {
                setStatus({
                    type: 'error',
                    mensagem: 'Erro: Usuário não encontrado. Tente novamente.',
                    loading: false
                });
            }
        });
    };

    return (
        <Container>
            {status.type === 'error' && <AlertError>{status.mensagem}</AlertError>}
            {status.type === 'success' && <AlertSuccess style={{ color: "green" }}>{status.mensagem}</AlertSuccess>}
            
            <LoginComponent>
                <h2>Login</h2>
                <hr />
                <form onSubmit={LoginSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <CamposInput 
                                type="email" 
                                name="email" 
                                placeholder="Digite o seu E-mail"
                                onChange={valorInput} 
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="senha">Senha: </label>
                            <CamposInput 
                                type="password" 
                                name="senha"
                                placeholder="Digite sua senha"
                                autoComplete="on"
                                onChange={valorInput} 
                            />
                        </div>
                    </div>
                    
                    {status.loading ? <EnviarButton type="submit" disabled>Acessando!</EnviarButton> : <EnviarButton type="submit">Entrar</EnviarButton>}
                </form>
            </LoginComponent>
        </Container>
    );
};
