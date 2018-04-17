import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";


const Nav = () => (

  <Navbar className= "nav  brown darken-3">
  <a href="/" className="brand-logo center valign-wrapper"><img src="/assets/images/icon/64x64.png" alt="logoimg" className="logoImg"/>Animal Tracks</a>
  <div className="listwrapper">
    <NavItem href='/'>Home</NavItem>
    <NavItem href='#'>Favorites</NavItem>
    <NavItem href="/login">Login</NavItem>
  </div>
</Navbar>
);

export default Nav;
