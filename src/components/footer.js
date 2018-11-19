import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 4rem;
`

const SocialMediaLinks = styled.ul`
    display: flex;
    list-style: none;
`

const Footer = () => (
    <StyledFooter>
        <span>Find me on internet 👩🏻‍💻</span>
        <SocialMediaLinks>
            <li>
                Linkedin
            </li>
            <li>
                Github
            </li>
        </SocialMediaLinks>
    </StyledFooter>
)

export default Footer