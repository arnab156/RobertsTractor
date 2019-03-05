import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import "./Nav.css";
 
class NavBurger extends React.Component {
  showSettings (event) {
    event.preventDefault();
   
  }
 
  render () {
    return (
      <Menu  left isOpen={ true }  >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/parts">Parts</a>
        <a id="about" className="menu-item" href="/resources">Resources</a>
        {/* <a id="about" className="menu-item" href="/about">About</a> */}
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className=" menu-item--small" href="www.google.com">Settings</a>
      </Menu>
    );
  }
}

export default NavBurger;