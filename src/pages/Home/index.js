import React, { useState, useEffect } from "react";
import { 
    Container, Apresentation, 
    ImagePerfil, Description, 
    Titulo, Texto, 
    ConteudoTitulo,
    ConteudoTexto
} from "./styles";


export const Home = () => {
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/jhonatann-per')
            .then(response => response.json())
            .then(data => setProfileImage(data.avatar_url))
            .catch(error => console.error('Erro ao buscar a imagem de perfil:', error));
    }, []);

    return (
        <Container>
            <Apresentation>
                {profileImage && <ImagePerfil 
                    src={profileImage} 
                    alt="Imagem de perfil" 
                />}
                <Description>
                    <ConteudoTitulo>
                        <Titulo>Jhonatan Santos</Titulo>
                    </ConteudoTitulo>
                    
                    <ConteudoTexto>
                        <Texto>Desde 2019, atuo na área de tecnologia, focando em
                            desenvolver minhas habilidades e conhecimentos. 
                            Atualmente, estou buscando realizar meu sonho de 
                            me tornar um desenvolvedor fullstack, combinando 
                            minha paixão por front-end e back-end para criar 
                            soluções completas e inovadoras.
                        </Texto>
                    </ConteudoTexto>
                    
                </Description>

            </Apresentation>
        </Container>
    );
};
