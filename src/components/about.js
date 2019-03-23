import React from "react"
import styled from 'styled-components'

const StyledAbout = styled.div`
    max-width: 30rem;
    padding: 0 2rem;

    @media (min-width: 1200px) {
        grid-column: 2 / 3;
    }
`

const StyledHeading = styled.h1`
    font-size: 1.8rem;
    color: #4e4e4e;
    text-align: center;
    margin: 3rem 0 2rem 0;

    @media (min-width: 1200px) {
        text-align: left;
        font-size: 2rem;
    }
`

const StyledParagraph = styled.p`
    color: #847e7e;
    margin-bottom: 1rem;
    line-heigt: 2rem;

    @media (min-width: 1200px) {
        margin-bottom: 0;
    }
`

const About = () => (
    <StyledAbout>
        <StyledHeading>Hi, I’m Meltem. I'm a software developer and a mentor.</StyledHeading>
        <StyledParagraph>
            I’m based in Toronto, Canada. I enjoy building digital products and tackling technical challenges. I'm currently working at Rangle.io, a Toronto-based digital transformation agency, where I help build web and mobile apps for clients from a wide range of industries. I mentor at Bridge School and Ladies Learning Code to help women level up in their digital careers.
        </StyledParagraph>
    </StyledAbout>
)

export default About