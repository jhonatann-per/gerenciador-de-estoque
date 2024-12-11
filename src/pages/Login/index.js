import React from "react";
import { Container, LoginComponent, CamposInput, EnviarButton } from "./styles";

export const Login = () => {
    return(
        <Container>
            <LoginComponent>
                <h2>Login</h2>
                <hr />
                
                <form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <CamposInput type="email" id="email" required />
                    </div>
                    
                    <div>
                        <label htmlFor="senha">Senha:</label>
                        <CamposInput type="password" id="senha" required />
                    </div>

                    <EnviarButton type="submit">Entrar</EnviarButton>
                </form>
            </LoginComponent>
        </Container>
    );
};
