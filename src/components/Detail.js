import React from 'react';
import styled from "styled-components";

const Detail = (props) => {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"/>
            </Background>

            <Title>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" />
            </Title>

            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayBtn>

                <TrailerBtn>
                    <img src="/images/play-icon-white.png" />
                    <span>Triler</span>
                </TrailerBtn>

                <AddBtn>
                    <span>+</span>
                </AddBtn>

                <GroupWatchBtn>
                <img src="/images/group-icon.png" />
                </GroupWatchBtn>
            </Controls>
            <SubTitle>
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                A Chinese mom who’s sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever.
            </Description>
        </Container>
    )
};


const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 4vh;
    padding-top: 70px;
    position: relative;    
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -999;
    opacity: 0.6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Title = styled.div `
    height:30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;
    margin: 8px 16px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div `
    display: flex;
    margin: 18px 16px;
    align-items: center;
`

const PlayBtn = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`;
const AddBtn = styled.button`
    margin-right: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    color: white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
    }
`
const GroupWatchBtn = styled(AddBtn)`
   background: rgb(0,0,0)
`

const SubTitle = styled.div `
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin: 12px 20px
`;

const Description = styled.div `
    color: rgb(249, 249, 249);
    font-size: 20px;
    line-height: 1.3;
    font-weight: 100;
    min-height: 20px;
    margin: 12px 20px;
    max-width: 650px;
`;

export default Detail;