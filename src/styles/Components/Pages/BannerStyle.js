import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export const InfoSec = styled.div`
    color: #fff;
    padding: 90px 0;
    background: ${({lightBg}) => (lightBg ? '#F2F3F5' : '#191d20')};
`;
export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({imgStart}) => (imgStart ? 'row-reverse' : 'row')};
`;
export const InfoColumn = styled.div`
    flex: 1;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
`;
export const TextWrapper = styled.div`
    max-width: 70%;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px){
        padding-bottom: 65px;
        max-width: 100%;
    }
`;
export const TopLine = styled.div`
    color: ${({lightTopLine}) => (lightTopLine ? '#fff' : '#e63946')};
    font-size: 18px;
    line-height: 16px;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`;
export const Headding = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    color: ${({lightText}) => (lightText ? '#fff' : '#191d20')};

    @media screen and (max-width: 1000px){
        font-size: 30px;
    }
    @media screen and (max-width: 700px){
        font-size: 20px;
    }
`;
export const Subtitle = styled.div`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({lightTextDesc}) => (lightTextDesc ? '#fff' : '#191d20')};
`;
export const ImgWrapper = styled.div`
    max-width: 555px;
    display: flex;
    justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};
`;
export const Img = styled.img`
    padding-right: 0;
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    max-height: 500px;
`;
export const TextAnimation = styled.p`
    border-right: 2px solid #fff;
    white-space: nowrap;
    overflow: hidden;

    animation: blinkCursor 700ms steps(40) infinite normal, 
        typing 3s steps(40) 1s normal both;

    @keyframes typing {
        from {
            width: 0;
        } to{
            width: 15.5em;
        }
    }

    @keyframes blinkCursor{
        from {    
            border-right-color: 2px solid #fff; 
        } to{
            border-right-color: transparent;
        }
  }
`;
export const IconLeft = styled(IoIosArrowBack)`
   margin: -6px;
`;
export const IconRight = styled(IoIosArrowForward)`
   margin: -6px;
`;