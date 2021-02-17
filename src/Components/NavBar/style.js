import styled from 'styled-components';
import { Container } from '../../GlobalStyles';
import { Link } from 'react-scroll';
import { AiFillBug } from 'react-icons/ai';

export const Nav = styled.nav`
    background: rgb(144, 8, 15);
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
`;
export const NavBarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 40px;
    
    ${Container}
`;
export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    display: flex;
    align-items: center;
    font-weight: 700;
`;
export const NavIcon = styled(AiFillBug)`
    margin-right: 0.5rem;
    font-size: 2rem;
`;
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 600px){
        display: block;
        position: absolute;
        top: -11px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        width: 100%; // alterar os valor altera o tamanho do menu
        height: 45vh;
        position: absolute;
        top: 50px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: all 0.5s ease;
        background: rgb(144, 8, 15);
    }
`;
export const NavItem = styled.li`
    height: 30px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #fff;
    }

    @media screen and (max-width: 600px){
        width: 100%;
        &:hover {
            border: none;
        }   
    }
`;
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    @media screen and (max-width: 600px){
        text-align: center;
        width: 100%;
        display: table;

        &:hover {
            transition: all 0.3s ease;
        }
    }
`;