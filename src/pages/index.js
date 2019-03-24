import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import headshot from '../images/headshot.png';

import About from '../components/about'
import Header from '../components/header'
import Footer from '../components/footer'

const StyledIndexPage = styled.div`
  background-color: #fdfdff;
  height: 100vh;
  font-family: arial, sans-serif;
  display: grid;
  grid-template-rows: 2fr 8fr 2fr;
  padding: 0 2rem;

  @media (min-width: 900px) {
    grid-template-rows: 1fr 10fr 1fr;
  }
`
const HeadshotWrapper = styled.div`
  grid-area: photo;
  margin: 0 auto 1rem auto;

  @media (min-width: 900px) {
    grid-column: 4 / 5;
  }
`;

const Headshot = styled.div`
  background-image: url(${headshot});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 36%;
  width: 16rem;
  height: 16rem;
  border-radius: 50%;

  @media (min-width: 900px) {
    width: 22rem;
    height: 22rem;
  }
`

const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-areas: "photo"
  "text";

  @media (min-width: 900px) {
    flex-direction: row;
    grid-template-areas: "text photo";
    grid-template-columns: 1fr 5fr 1rem 5fr 1fr;
  }
`

const IndexPage = () => (
  <StyledIndexPage>
    <Header />
    <MainContentWrapper>
      <About />
      <HeadshotWrapper>
        <Headshot />
      </HeadshotWrapper>
    </MainContentWrapper>
    <Footer />
  </StyledIndexPage>
)

export default IndexPage
