import React from "react"
import styled from 'styled-components'

const StyledAbout = styled.div`
    grid-area: text;

    @media (min-width: 900px) {
        grid-column: 2 / 3;
    }
`

const StyledHeading = styled.h1`
    font-size: 1.8rem;
    color: #4e4e4e;
    text-align: center;
    margin: 3rem 0 2rem 0;

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

const About = () => (
    <StyledAbout>
        <StyledHeading>Hi 👋🏻 I’m Meltem. I'm a software developer and a mentor.</StyledHeading>
        <StyledParagraph>
            I currently work at Rangle.io where I build a wide range of products from mobile and web applications to design systems. Although I have a background in Chemical Engineering,
            I fell in love with building software and decided to pursue a career as a software developer ever since. I'm passionate about supporting women in STEM, and mentor at Bridge School, where I support women, agender, and non-binary professionals in software development to skill up. 
            I'm a language nerd and I fluently speak 3 languages. In my spare time, you can find me exploring food and live music scene in Toronto.
        </StyledParagraph>
    </StyledAbout>
)

export default About