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
from './style';

export const InfoSection = (
    {
        lightBg, 
        imgStart, 
        lightTopLine, 
        lightTextDesc, 
        topLine,
        lightText,
        headline,
        description,
        start,
        img,
        alt
    }
) => {
    return (
        <>
            <InfoSec lightBg={lightBg} id="home">
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Headding lightText={lightText}>{headline}</Headding>
                                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;