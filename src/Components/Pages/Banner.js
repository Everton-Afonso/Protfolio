import React from 'react'
import { Container } from '../../GlobalStyles';
import { IconContext } from 'react-icons/lib';

import 
    { 
        InfoSec, 
        InfoRow, 
        InfoColumn, 
        TextWrapper,
        TopLine,
        Headding,
        Subtitle,
        TextAnimation,
        IconLeft,
        IconRight
    } 
from '../../styles/Components/Pages/BannerStyle';

export const Banner = () => {
    return (
        <>
            <IconContext.Provider value={{ size: '25px' }}>
                <InfoSec lightBg={false} id="home">
                    <Container>
                        <InfoRow imgStart={false}>
                            <InfoColumn>
                                <TextWrapper>
                                    <TopLine lightTopLine={false}> Everton Otavio Afonso </TopLine>
                                    <Headding lightText={true}>
                                        Sempre à procura de novos desafios para melhorar meus conhecimentos.
                                    </Headding>
                                    <Subtitle lightTextDesc={true}>
                                        <TextAnimation>
                                            Mãos na massa <IconLeft/> Bora codar <IconRight/>
                                        </TextAnimation>
                                    </Subtitle>
                                </TextWrapper>
                            </InfoColumn>
                        </InfoRow>
                    </Container>
                </InfoSec>
            </IconContext.Provider>
        </>
    )
}

export default Banner;