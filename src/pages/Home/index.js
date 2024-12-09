import React, { useState, useEffect } from "react";
import { Container, Apresentation, ImagePerfil, Description } from "./styles";

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

                </Description>

            </Apresentation>
        </Container>
    );
};