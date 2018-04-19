import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";



const Nav = () => (

  <Navbar className= "nav  brown darken-3">
  <a href="/" className="brand-logo center valign-wrapper"><img src="/assets/images/icon/64x64.png" alt="logoimg" className="logoImg"/>Animal Tracks</a>
  <div className="listwrapper">
  	<NavItem className="item" href='/animals'>Search</NavItem>
    <NavItem className="item" href='/endangered'>Endangered Animals List</NavItem>
    <NavItem className="item" href='/charity'>Donate</NavItem>
    <NavItem className="item" href="/login">Login</NavItem>
  </div>
</Navbar>
);

export default Nav;
