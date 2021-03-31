import React from 'react'
import 
    { 
        FooterContainer, 
        FooterTop, 
        FooterLogo, 
        FooterLogoImg,
        FooterContacts, 
        FooterText, 
        FooterLink,
        Facebook,
        Instagram,
        Linkedin,
        Website,
        WebsiteRights,
        SocialIcons
    } 
from '../styles/Components/FooterStyles';

const Footer = () => {
    const Ano = new Date().getFullYear();
    return (
        <>
            <FooterContainer id="contatos">
                <FooterTop>
                    <FooterLogo>
                        <FooterLogoImg src='Img/Logo.png' alt="My logo"/>
                        <p>Obrigado por sua visita</p>
                    </FooterLogo>
                    <FooterContacts>
                        <FooterText>Contatos</FooterText>
                        <SocialIcons>
                            <FooterLink href='/' target='_blank' aria-label='Facebook'>
                                <Facebook /> Facebook 
                            </FooterLink>
                            <FooterLink href='/' target='_blank' aria-label='Instagram'>
                                <Instagram /> Instagem
                            </FooterLink>
                            <FooterLink href='/' target='_blank' aria-label='LinkedIn'>
                                <Linkedin /> Linkdin
                            </FooterLink>
                        </SocialIcons>
                    </FooterContacts>
                </FooterTop>
            </FooterContainer>
            <Website>
                <WebsiteRights>
                   {Ano} Everton Atavio Afonso
                </WebsiteRights>
            </Website>
        </>
    )
}

export default Footer
