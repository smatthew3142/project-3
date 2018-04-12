import React from "react";
import { Navbar, NavItem } from "react-materialize";
import "./Nav.css";


const Nav = () => (

  <Navbar className= "nav  grey darken-1" right style={{position: 'fixed', zIndex: 10}}>
  <a href="/" className="brand-logo center">Endangered Species Information</a>
  <NavItem href='/'>Home</NavItem>
  <NavItem href='#'>Saved Animals</NavItem>
</Navbar>
);

export default Nav;
