import React from "react";
import styled from "styled-components";


const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Desny+" />
            </Logo>
            <NavMenu>
                <a>
                    <img src="/images/" />
                </a>
            </NavMenu>
        </Nav>
    )
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 35px;
    letter-spacing: 16px;
    z-index: 1;
`;

const Logo = styled.a`
   padding: 0;
   width: 80px;
   ${'' /* margin-top: 4px; */}
   max-height: 70px;
   display: inline-block; 
   img{
       display: block;
       width:100%;
   }
`;

const NavMenu = styled.div`
   display: flex;
   align-items: center;
   flex-flow: row nowrap;
   height: 100%;
   justify-content: flex-end;
   position: relative;
   margin-right: auto;
   margin-left: 24px; 

   ${'' /* hide navbar for small screen */}
   @media (max-width: 768px) {
       display: none;
   }
`;

export default Header;
