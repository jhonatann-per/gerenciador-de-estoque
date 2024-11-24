import React from 'react';
import { Menu } from '../../components/Menu';

import { Container, ConteudoTitulo, Titulo} from '../../styles/styles_global'

export const Dashboard = () => {
    return(
        
       <Container>
            <Menu></Menu>
            <ConteudoTitulo>
                <Titulo>Dashboard</Titulo>
            </ConteudoTitulo>
        </Container> 
    )
}

