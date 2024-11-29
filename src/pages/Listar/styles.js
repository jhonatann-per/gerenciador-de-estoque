import styled from "styled-components";



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

export const AlertSucess = styled.p`
    background-color: #d1e7dd;
    color: #0f5132;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #badbcc;
    border-radius: 4px;
`;