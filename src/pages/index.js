import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json';
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`

const logos = ['sketch', 'figma', 'studio',  'framer', 'react', 'swift'].map((logo) => <img src={require(`../images/logo-${logo}.png`)} width="50" key={logo} />);

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br />design and code React apps</h1>
        <p>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</p>
        <Link to="/video">Watch the video</Link>
        <div className="Logos">{logos}</div>
      </div>
      <Wave />
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
      <Card 
        title="DesignSystem"
        text="10 sections"
        image={require('../images/wallpaper.jpg')} />
      <Card 
        title="React for Designers"
        text="11 sections"
        image={require('../images/wallpaper2.jpg')} />
      <Card 
        title="Sound Design"
        text="5 sections"
        image={require('../images/wallpaper3.jpg')} />
      <Card 
        title="ARKit 2"
        text="10 sections"
        image={require('../images/wallpaper4.jpg')} />
      </div>
    </div>
    <Section
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contentful and deploying your site with Netlify."
    />
    
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
    {staticdata.cells.map(({title, image}) => (
      <Cell
        key={title}
        title={title}
        image={image} />
    ))}
    </SectionCellGroup>
    
  </div>
)

export default IndexPage
