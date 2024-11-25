import styled from "styled-components";

export const BotaoAcao = styled.section`
    margin: 5px;
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
export const ButtonEditar = styled.button`
    background-color: #fff;
    color: #ffc107;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    margin: 10px;
    &:hover{
        background-color: #ffc107;
        color: #000;
    }
`;
export const ButtonApagar = styled.button`
    background-color: #fff;
    color: #dc3545;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 17px;
    &:hover{
        background-color: #dc3545;
        color: #000;
    }
`;

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    th{
        background-color: #007281;
        padding: 10px;
        color: white;
    };
    td{
        padding: 10px;
        background-color: #ebe4db;
    }
`;