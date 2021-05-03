import React from "react";
import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/cta-logo-one.svg" alt="cta-logo-one" />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-logo-two"/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    box-sizing: border-box;
    padding: 80px 40px;
    margin-bottom: 10vw;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    bacground-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -999;
`;

const CTA = styled.div`
    ${'' /* margin: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%; */}
    display: flex;
    max-width: 650px;
    width: 100%;
    flex-direction: column;

`;

const CTALogoOne = styled.img`
    margin-bottom: 22px;
    max-width: 650px;
    min-height: 1px;
    display: block;
    width: 100%;
`;
const CTALogoTwo = styled.img`
    max-width: 650px;
    margin-bottom: 22px;
    display: inline-block;
    vertical-align: bottom;
    width: 100;
`;

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    width: 100%;
    margin-bottom: 8px;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s ease 0s;
    &:hover {
        background-color: #0483ee;
        cursor: pointer;
    }
`;

const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1.0); 
    font-size: 13px;
    line-height: 1.5;
`;

export default Login;