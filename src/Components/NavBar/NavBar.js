import React, { useState } from 'react'
import { IconContext } from 'react-icons/lib';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import 
    { 
        Nav, 
        NavBarContainer, 
        NavIcon, 
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks
    } 
from './style';

const NavBar = () => {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav> {/* romver o id daqui e colocae na pagina home*/}
                    <NavBarContainer>
                        <NavLogo onClick={closeMenu}>
                            <NavIcon />
                            EOA
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {
                                click ? <AiOutlineClose /> : <FaBars />
                            }
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks 
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-700}
                                    duration={500}>
                                        Home
                                    </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    activeClass="active"
                                    to="sobre"
                                    spy={true}
                                    smooth={true}
                                    offset={-50}
                                    duration={500}>
                                        Sobre
                                    </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    activeClass="active"
                                    to="pojetos"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                        Pojetos
                                    </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    activeClass="active"
                                    to="contatos"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                        Contatos
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
