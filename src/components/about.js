import React from "react"
import styled from 'styled-components'

const StyledAbout = styled.div`
    max-width: 30rem;
    padding: 0 5rem;
`

const StyledHeading = styled.h1`
    font-size: 2rem;
    color: #4e4e4e;
`

const StyledParagraph = styled.p`
    font-size: 1rem;
    line-height: 2rem;
    color: #847e7e;
`

const About = () => (
    <StyledAbout>
        <StyledHeading>Hi, I’m Meltem. I'm a software developer.</StyledHeading>
        <StyledParagraph>
            I’m based in Toronto, Canada. I enjoy exploring/learning new things and value craft. I'm currently working at Rangle.io, a Toronto-based digital transformation agency, where I help build web and mobile apps for clients from a wide range of industries. I also mentor at Bridge School and Ladies Learning Code.
        </StyledParagraph>
    </StyledAbout>
)

export default About