import styled from 'styled-components';
import fundoGif from '../../assets/fundo.gif';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${fundoGif}) no-repeat center center fixed;
    background-size: cover;
    color: white;
`;

export const LoginComponent = styled.div`
    width: 25%;
    height: 50%;
    border: solid 3px white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);

    @media (max-width: 1200px) {
        width: 40%;
    }

    @media (max-width: 900px) {
        width: 50%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 480px) {
        width: 75%;
    }

    @media (max-width: 340px) {
        width: 90%;
    }
`;

export const CamposInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: calc(100% - 20px); 
    border: 1px solid white;
    background-color: #444;
    color: white;

    @media (max-width: 480px) {
        padding: 8px;
    }

    @media (max-width: 340px) {
        padding: 6px;
    }
`;


export const EnviarButton = styled.button`
    margin-top: 18px;
    padding: 10px 28px;
    border: 1px solid white;
    background-color: #61dafb;
    border-radius: 2px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #21a1f1;
    }

    @media (max-width: 480px) {
        padding: 8px 24px;
    }

    @media (max-width: 340px) {
        padding: 6px 20px;
    }
`;
