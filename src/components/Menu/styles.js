import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    padding: 18px 0;

    @media (max-width: 960px) {
        padding: 12px 0;
    }

    @media (max-width: 768px) {
        padding: 10px 0;
    }

    @media (max-width: 480px) {
        padding: 8px 0;
    }

    @media (max-width: 360px) {
        padding: 6px 0;
    }
`;

export const NavList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Button = styled(Link)`
    background-color: transparent;
    border-radius: 5px;
    color: white;
    border: 2px solid white;
    padding: 8px 20px;
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
        border-color: black;
    }

    &:focus {
        outline: none;
    }

    @media (max-width: 960px) {
        padding: 8px 18px;
        font-size: 0.9em;
    }

    @media (max-width: 768px) {
        padding: 6px 15px;
        font-size: 0.8em;
    }

    @media (max-width: 480px) {
        padding: 5px 12px;
        font-size: 0.7em;
    }

    @media (max-width: 360px) {
        padding: 4px 10px;
        font-size: 0.6em;
    }
`;
