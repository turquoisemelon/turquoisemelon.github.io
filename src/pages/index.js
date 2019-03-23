import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import headshot from '../images/headshot_uncut.jpg';

import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {github} from '@fortawesome/free-solid-svg-icons'

// library.add(github)

const StyledIndexPage = styled.div`
  background-color: #fdfdff;
  height: 100vh;
  font-family: arial, sans-serif;
  display: grid;
  grid-template-rows: 2fr 8fr 2fr;

  @media (min-width: 900px) {
    grid-template-rows: 1fr 10fr 1fr;
  }
`

const Headshot = styled.div`
  background-image: url(${headshot});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  @media (min-width: 900px) {
    width: 24rem;
    height: 24rem;
    grid-column: 4 / 5;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-evenly;
    display: grid;
    grid-template-columns: 1.5fr 4fr 1fr 4fr 1.5fr;
  }
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
