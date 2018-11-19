import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import headshot from '../images/meltem-headshot.png';

import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'

const StyledIndexPage = styled.div`
  background-color: #fdfdff;
  height: 100vh;
  font-family: arial, sans-serif;
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
`

const Headshot = styled.div`
  background-image: url(${headshot});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 15rem;
  height: 20rem;
`

const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const IndexPage = () => (
  < StyledIndexPage>
    <Header />
    <Wrapper>
      <About />
      <Headshot />
    </Wrapper>
    <Footer />
  </StyledIndexPage>
)

export default IndexPage
