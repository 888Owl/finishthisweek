import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import QRcode from 'react-qr-code';
import { NavLink } from 'react-router-dom'
import house from '../Images/house.png'

const Contact: React.FC = () => {
const [qrsize, setqrsize] = useState(true)


useEffect(() => {
    if(Number(window.innerWidth) < 920){
        setqrsize(false)
    }
  }, [setqrsize])

    return (
        <StyledContainer>
            <StyledSectionsHolder>
        <StyledSections to='/' exact><img width="30px" height="30px" src={house} alt='house to show that this is a button to home'/></StyledSections>
        </StyledSectionsHolder>
        {qrsize && <StyledHeader>Links and their respective QRCodes for contacting me.</StyledHeader>}
        {!qrsize && <StyledHeader>Links for contacting me.</StyledHeader>}
            <StyledInnerContainer>
                <StyledInnerGrouping>
            {qrsize && <QRcode size={87} value={"https://t.me/SamInTaiwan"} />}
            <StyledLink target='_self' href="https://t.me/SamInTaiwan">Telegram</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            {qrsize && <QRcode size={87} value={"https://line.me/R/ti/p/samdepramere"} />}
            <StyledLink target='_self' href="https://line.me/R/ti/p/samdepramere">Line</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            {qrsize && <QRcode size={87} value={"https://wa.me/886975139873"} />}
            <StyledLink target='_self' href="https://wa.me/886975139873">WhatsApp</StyledLink>
            </StyledInnerGrouping>
            </StyledInnerContainer>
            <StyledInnerContainer>
            <StyledInnerGrouping>
            {qrsize && <QRcode size={87} value={"https://twitter.com/CryptoOwl3"} />}
            <StyledLink target='_self' href="https://twitter.com/CryptoOwl3">Twitter</StyledLink>
            </StyledInnerGrouping>
            <HorizontalSpacer />
            <StyledInnerGrouping>
            {qrsize && <QRcode size={87} value={"87daysofsam@gmail.com"} />}
            <StyledLink target='_self' href="mailto:87daysofsam@gmail.com">Email</StyledLink>
            </StyledInnerGrouping>
            </StyledInnerContainer>
        </StyledContainer>
    )
}

const StyledHeader = styled.h3`
    text-align: center;
`

const HorizontalSpacer = styled.div`
width: 25px;
`

const StyledContainer = styled.div`
display: flex;
flex-flow: column;
margin-left: auto;
margin-right: auto;
border-radius: 4px;
justify-content: center;
width: 80%;
max-height: 90%;
overflow-y: scroll;
height: 90%;
background-color: #006464;
`
const StyledInnerContainer = styled.div`
display: flex;
flex-flow: row;
margin-top: 40px;
justify-content: space-around;
justify-items: space-around;
width: 100%;
height: 15%;
`
const StyledLink = styled.a`
@media (min-width: 900px){
text-decoration: none;
color: unset;
border-radius: 8px;
width: 83px;
&:hover {
    background-color: white;
    color: #006464;
}
}
@media (max-width: 900px){
    box-sizing: content-box;
    text-decoration: none;
    color: unset;
    border-radius: 8px;
    width: 46px;
    }
`
const StyledInnerGrouping = styled.div`
width: 33%;
height: 140px;
display: flex;
flex-direction: column;
align-items: center;
`

const StyledSections = styled(NavLink)`
    height: 10%;
    width: 10%;
    padding:2%;
`
const StyledSectionsHolder = styled.nav`
@media (min-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 5%;
    width: 5%;
    display: flex;
        left: 3%;
    }
    @media (max-width: 900px){
        position: absolute;
    color:unset;
    text-decoration: none;
    top: 3%;
    height: 5%;
    width: 5%;
    display: flex;
        left: 2%;
    }
`

export default Contact