import React from 'react'
import { Link } from 'gatsby'
import Footer from './Footer'
import avatar from '../assets/images/yo_BN.jpg'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="" />
          </Link>
          <h2>
            Blog que narra mi experiencia como Desarrollador Frontend junior
            mientras busco trabajo.
          </h2>
        </div>
        <div>
          <a href="https://cesarmelia.com/" target="_blank" rel="noreferrer">
            <h2>cesarmelia.com</h2>
          </a>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
