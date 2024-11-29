import styled from "styled-components";

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    color: black;
    background-color: blue;
    padding: 15px 5px;
    font-family: sans-serif;
    margin-bottom: 15px;
    a{
        text-decoration: none;
        color: #ffffff;
        margin: 0 8px
    }
    a:hover{
        color: #d0d2db
    }
    li{
        font-size: 1.0em;
        list-style: none;
    }
`;