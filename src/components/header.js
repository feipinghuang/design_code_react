import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = () => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
      <Link to="/courses">Courses</Link>
      <Link to="/download">Download</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy" className="BuyButton">Buy</Link>
    </div>
  </div>
)

export default Header
