import React from "react"
import styled from 'styled-components'

const StyledFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 4rem;
    color: #7d7d7d
`

const Footer = () => (
    <StyledFooter>
        <span>2019 &#169; Meltem Kilic 👩🏻‍💻</span>
    </StyledFooter>
)

export default Footer