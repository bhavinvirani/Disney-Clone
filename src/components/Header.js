import React from "react";
import styled from "styled-components";

const Header = (props) => {

    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="Desny+" />
            </Logo>
            <NavMenu>

                <a href="/TV">
                    <span>TV</span>
                </a>
                <a href="/MOVIES">
                    <span>MOVIES</span>
                </a>
                <a href="/ORIGINALS">
                    <span>ORIGINALS</span>
                </a>
                <a href="/SERIES">
                    <span>SERIES</span>
                </a>
                <a href="/SPORTS">
                    <span>SPORTS</span>
                </a>
                <a href="/WATCHLIST">
                    <span>WATCHLIST</span>
                </a>
                <input type="text" placeholder="Serche"></input>
            </NavMenu>
            <LoginButton>LOGIN</LoginButton>
            {/* <UserImg src="https://pbs.twimg.com/profile_images/1289937977594937344/YGxM3xrn_400x400.jpg"/> */}
        </Nav>
    );
};

const Nav = styled.nav`
  height: 70px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 999;
  overflow-x: hidden;
`;

const Logo = styled.a`
  padding: 0;
  margin-right: 6px;
  width: 80px;
  min-width: 70px;
  ${"" /* margin-top: 4px; */}
  max-height: 70px;
  display: inline-block;
  img {
    margin-bottom: 4px;
    display: block;
    width: 100%;
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

   a {
       display: flex;
       align-items: center;
       padding: 0 12px;

       ${'' /* img {
           height:20px;
           width:20px;
           min-width:20px;
           z-index: auto;
       } */}

        span {
            color: rgb(249, 249, 249);
            font-size: 13px;
            letter-spacing: 2.2px;
            line-height: 1.08;
            padding: 2px 0;
            white-space: nowrap;
            position: relative;
        
            &:before {
                content: "";
                background-color: rgb(249, 249, 249);
                border-radius: 0px, 0px, 4px, 4px;
                position: absolute;
                height: 2px;
                left: 0px;
                right: 0px;
                bottom: -6px;
                visibility: hidden;
                width: auto;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
 
        &:hover {
            span:before {
                transform: scaleX(1);
                visibility: visible;
                opacity: 1 !important;
            }
         }
    }
    input {
        background-color: #090b13;
        color: rgb(249, 249, 249);
        border-left:none;
        border-right:none;
        border-top:none;
        border: 1px solid transparent;
        border-bottom: 1px solid #f9f9f9;
        font-size: 15px;
        font-weight: 250;

        &:hover,
        &:focus {
            outline: 0;
            border: 1px solid transparent;
            border-bottom: 1px solid #575756;
            background-position: 100% center;
        }
    }
        
   @media (max-width: 768px) {
       display: none;
   }
`;



const LoginButton = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius: 3px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color:transparent;
        cursor:pointer;
    }
`;

const UserImg  = styled.img `
    height: 43px;
    width: 43px;
    border-radius: 50%;
    cursor: pointer;
`

export default Header;
