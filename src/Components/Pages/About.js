import React from 'react'
import { Container } from '../../GlobalStyles';
import 
    { 
        InfoSec, 
        InfoRow, 
        InfoColumn, 
        TextWrapper,
        TopLine,
        Headding,
        Subtitle,
        ImgWrapper,
        Img
    } 
from '../../styles/Components/Pages/AboutStyle';

export const About = () => {
    return (
        <>
            <InfoSec lightBg={true} id="sobre">
                <Container>
                    <InfoRow imgStart={'strat'}>
                        <InfoColumn>
                            <TextWrapper>
                                <Headding lightText={false}>Sobre</Headding>
                                <TopLine lightTopLine={false}>Everto Otavio Afonso</TopLine>
                                <Subtitle lightTextDesc={false}>
                                    Atualmente sou discente do curso de Sistemas de 
                                    Informação do IFSULDEMINAS - Campus Machado, adoro 
                                    trabalhar com novas ferramentas e tecnologias.
                                </Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={'start'}>
                                <Img src='Img/svg1.svg' alt='Perfil' />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default About;