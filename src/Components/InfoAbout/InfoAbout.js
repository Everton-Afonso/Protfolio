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

export const InfoAbout = (
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
            <InfoSec lightBg={lightBg} id="sobre">
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <Headding lightText={lightText}>{headline}</Headding>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
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

export default InfoAbout;