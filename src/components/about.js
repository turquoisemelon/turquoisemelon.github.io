import React from "react"
import styled from 'styled-components'
import {FaGithub, FaTwitter, FaLinkedin, FaEnvelope} from 'react-icons/fa';

const StyledAbout = styled.div`
    grid-area: text;
    display: grid;
    grid-gap: 0.5rem 0;

    @media (min-width: 900px) {
        grid-column: 2 / 3;
        grid-gap: 1rem 0;
    }
`

const StyledHeading = styled.h1`
    font-size: 1.8rem;
    color: #4e4e4e;
    text-align: center;
    margin: 0;

    @media (min-width: 900px) {
        text-align: left;
        font-size: 2rem;
    }
`

const StyledParagraph = styled.p`
    color: #847e7e;
    margin-bottom: 1rem;

    @media (min-width: 900px) {
        margin-bottom: 0;
    }
`

const SocialMediaLinksListItemsList = styled.ul `
    display: flex;
    list-style: none;
    padding-left: 0;
`

const SocialMediaLinksListItem = styled.li `
    margin-right: 1rem;
`

const SocialMediaLink = styled.a`
    text-decoration :none;
    color: #4e4e4e;

    &:hover {
        color: #847e7e;
    }
`

const About = () => (
    <StyledAbout>
        <StyledHeading>Hi 👋🏻 I’m Meltem. I'm a software developer and a mentor.</StyledHeading>
        <StyledParagraph>
            I currently work at Rangle.io where I build a wide range of products from mobile and web applications to design systems. Although I have a background in Chemical Engineering,
            I fell in love with building software and decided to pursue a career as a software developer ever since. I'm passionate about supporting women in STEM, and mentor at Bridge School, where I support women, agender, and non-binary professionals in software development to skill up. 
            I'm a language nerd and I fluently speak 3 languages. In my spare time, you can find me exploring food and live music scene in Toronto.
        </StyledParagraph>
        <SocialMediaLinksListItemsList>
            <SocialMediaLinksListItem>
                <SocialMediaLink href="https://github.com/turquoisemelon" target="_blank">
                    <FaGithub />
                </SocialMediaLink>
            </SocialMediaLinksListItem>
            <SocialMediaLinksListItem>
                <SocialMediaLink href="https://twitter.com/trilingualmel" target="_blank">
                    <FaTwitter />
                </SocialMediaLink>
            </SocialMediaLinksListItem>
            <SocialMediaLinksListItem>
                <SocialMediaLink href="https://www.linkedin.com/in/meltem-kilic/" target="_blank">
                    <FaLinkedin />
                </SocialMediaLink>
            </SocialMediaLinksListItem>
            <SocialMediaLinksListItem>
                <SocialMediaLink href="mailto:melltemkilic@gmail.com" target="_blank">
                    <FaEnvelope />
                </SocialMediaLink>
            </SocialMediaLinksListItem>
        </SocialMediaLinksListItemsList>
    </StyledAbout>
)

export default About