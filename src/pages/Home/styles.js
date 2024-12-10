import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px auto;
    width: 1280px;
    height: 100vh;
    max-width: 1280px;
`;

export const Apresentation = styled.div`
    display: flex;
    width: 100%;
`;


export const ImagePerfil = styled.img`
    width: 30%;
    border-radius: 50%;
    border: 3px solid black;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%); 
    box-shadow: 0 0 75px 35px rgba(255, 255, 255, 0.8); 
`;



export const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: end;
    justify-content: center;
    align-items: end;
    color: white;
    font-family: sans-serif;
`;

export const ConteudoTitulo = styled.div`
    width: 100%;
    margin-bottom: 15px;
`;

export const Titulo = styled.h1`
    color: white;
`;

export const ConteudoTexto = styled.div`
    width: 70%;
`;

export const Texto = styled.p`
    font-size: 20px;
`;
