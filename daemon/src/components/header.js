import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
      <div classname='container'>
       <div classname="inner-header">
       <div classname='logo'>
          <Link to="/" ></Link>
        </div>
        <div classname="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
       </div>
      </div>
  </header>
)



export default Header
