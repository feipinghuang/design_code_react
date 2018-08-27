import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  state = {
    hasScrolled: false
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    this.setState({
      hasScrolled: window.pageYOffset > 50
    })
  }

  render () {
    return (
      <div className={this.state.hasScrolled ? "Header HeaderScrolled" : "Header"}>
        <div className="HeaderGroup">
          <Link to="/"><img width="30" src={require('../images/logo-designcode.svg')} /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/download">Download</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy" className="BuyButton">Buy</Link>
        </div>
      </div>
    )
  }
}

export default Header
