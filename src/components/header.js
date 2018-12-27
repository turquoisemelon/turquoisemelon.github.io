import React from 'react'
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 1rem;

  @media (min-width: 900px) {
    padding: 0 1rem;
  }
`

const StyledSpan = styled.span`
  margin-right: 0.5rem;
  color: #9c9c9c;
  font-size: 12px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledSpan>EN</StyledSpan>
    <StyledSpan>FR</StyledSpan>
    <StyledSpan>TR</StyledSpan>
  </StyledHeader>
)

export default Header
