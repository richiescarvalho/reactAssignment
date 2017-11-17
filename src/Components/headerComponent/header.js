import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <header> 
        <nav className="navbar navbar-default navbar-fixed-top header-nav" data-aos="fade-down" data-aos-duration="3000" >
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/">
                <img className="contactMeLogo header-logo-src" src="Assets/img/paceLogo.png" alt="Richie Carvalho" />
              </Link>
              <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
                <div className="sr-only">
                Toggle navigation

                </div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
              </button>
            </div>
            <div  className="collapse navbar-collapse header-link-bar" id="navcol-1" >
              <ul className="nav navbar-nav navbar-right" >
                <li  id="homepage" className="active tabsActive header-link-bar-li" role="presentation" onclick="redirectClick('homepage')"><Link to="/">Home </Link></li>
                <li id="aboutme" className=" tabsActive header-link-bar-li" role="presentation" onclick="redirectClick('aboutme')"><Link to="/AboutMe">About Me</Link></li>
                <li id="contactus" className=" tabsActive header-link-bar-li" role="presentation" onclick="redirectClick('contactus')"><Link to="/ContactMe">Contact Me</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    
      </header>
    );
  }
}

export default Header;
