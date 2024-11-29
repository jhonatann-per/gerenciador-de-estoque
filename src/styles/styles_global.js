import styled from "styled-components";

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const Hr = styled.hr`
    margin-bottom: 10px;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;
`;

export const BotaoAcao = styled.section`
    margin: 5px;
`;

export const ButtonInfo = styled.button`
    background-color: #fff;
    color: #000;
    padding: 5px 8px;
    border: 1px solid #198754;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    &:hover{
        background-color: #0dcaf0;
        color: #000;
    }
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    &:hover{
        background-color: #198754;
        color: #000;
    }
`;

export const ButtonVisualizar = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    &:hover{
        background-color: #0d6efd;
        color: #000;
    }
`;

export const Form = styled.form`
    margin: 0px auto;
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    width: 100%;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 10px;
`;

export const AlertError = styled.p`
    background-color: #f8d7da;
    color: #842029;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #f5c2c7;
    border-radius: 4px;
`;

export const AlertSucess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #badbcc;
    border-radius: 4px;
`;
