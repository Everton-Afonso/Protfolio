import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

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

    p {
        font-size: 16px;
    }
    
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
    align-items: center;
`;
export const SocialIcons = styled.div`
    display: flex;
    flex-direction: initial; 

    @media screen and (max-width: 1000px){
        flex-direction: column; 
    }
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
    font-size: 16px;
`;
export const Facebook = styled(FaFacebook)`
    color: #007bb6;
    margin-bottom: -0.3rem;
    font-size: 24px;
    margin-right: 5px;
`;
export const Instagram = styled(FaInstagram)`
    color: #fff;
    margin-bottom: -0.3rem;
    font-size: 24px;
    margin-right: 5px;
    border-radius: 40%;
    background: radial-gradient(
		circle at 30% 107%,
		#fdf497 0%,
		#fdf497 5%,
		#fd5949 45%,
		#d6249f 60%,
		#285aeb 90%
	);
`;
export const Linkedin = styled(FaLinkedin)`
    color: #0e76a8;
    margin-bottom: -0.3rem;
    font-size: 24px;
    margin-right: 5px;
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
    color: #fff;
    height:40px;
`;
