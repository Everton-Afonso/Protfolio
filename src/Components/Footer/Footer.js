import React from 'react'
import Logo from '../../Img/Logo.png'
import 
    { 
        FooterContainer, 
        FooterTop, 
        FooterLogo, 
        FooterLogoImg,
        FooterContacts, 
        FooterText, 
        FooterLink,
        Website,
        WebsiteRights,
        WebsiteRightsImg
    } 
from './style';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterTop>
                    <FooterLogo>
                        <a href={'../Header/index.js#navbar'}>
                            <FooterLogoImg src={Logo} alt="My logo"/>
                        </a>
                        <p>Obrigado por sua visita</p>
                    </FooterLogo>
                    <FooterContacts>
                        <FooterText>Contatos</FooterText>
                        <FooterLink>Facebook</FooterLink>
                        <FooterLink>Instagem</FooterLink>
                        <FooterLink>Linkdin</FooterLink>
                    </FooterContacts>
                </FooterTop>
            </FooterContainer>
            <Website>
                <WebsiteRights>
                    Everton
                </WebsiteRights>
            </Website>
        </>
    )
}

export default Footer
