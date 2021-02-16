import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
    background-color: #191d20;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const FooterTop = styled.div`
    width: 100%;
    max-width: 1000px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    @media screen and (max-width: 700px){
        flex-direction: column;
    }
`;
export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    width: 50%;
    border-right: 1px solid #fff;
    
    @media (max-width: 700px){
        border-right: none;
    }
`;
export const FooterLogoImg = styled.img`
    width: 60px;
    height: 40px;
    margin-bottom: 10px;
`;
export const FooterContacts = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
export const FooterText = styled.h2`
    margin-bottom: 16px;
    text-align: center;
`;
export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.4rem;
    padding-left: 30px;
    font-size: 15px;

    &:hover {
        color: rgb(144, 8, 15);
    }
`;
export const Website = styled.div`
    background: #000;
    width: 100%;
    align-items: center;
`;
export const WebsiteRights = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    color: #fff;
    height:40px;
`;
export const WebsiteRightsImg = styled.img`
    width: 60px;
    height: 40px;
`;
