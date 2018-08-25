import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
  margin-top: 110px;
  background-image: url(${({image}) => image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rows: 300px auto;
  grid-gap: 20px;
  position: relative;
  @media (max-width: 640px) {
		height: 820px;
	}
`

const SectionLogo = styled.img`
  margin: 0 auto;
  width: 128px;
  align-self: end;
`

const SectionTtitleGroup = styled.div`
  max-width: 800px;
  margin: 0 40px;
  display: grid;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 100%;
  grid-gap: 20px;

	@media (max-width: 720px) {
		grid-template-columns: 1fr;
	}
`

const SectionTile = styled.h3`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;

  @media (max-width: 640px) {
		font-size: 40px;
    text-align: center;
	}
`

const SectionText = styled.p`
  color: white;
  line-height: 1.2;

  @media (max-width: 640px) {
    text-align: justify;
	}
`

const WaveTop = styled.div`
  width: 100%;
  position: absolute;
  top: -6px;;
  left: 0;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  width: 100%;
  position: absolute;
  bottom: -6px;
  left: 0;
`

const Section = ({image, logo, title, text}) => (
  <SectionGroup image={image}>
    <WaveTop><Wave /></WaveTop>
    <WaveBottom><Wave /></WaveBottom>
    <SectionLogo src={logo} />
    <SectionTtitleGroup>
      <SectionTile>{title}</SectionTile>
      <SectionText>{text}</SectionText>
    </SectionTtitleGroup>
  </SectionGroup>
)

export default Section
