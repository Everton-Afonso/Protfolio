import React from 'react'
import Logo from '../Img/Logo.png'
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
from './style';

const Footer = () => {
    const Ano = new Date().getFullYear();
    return (
        <>
            <FooterContainer id="contatos">
                <FooterTop>
                    <FooterLogo>
                        <FooterLogoImg src={Logo} alt="My logo"/>
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
