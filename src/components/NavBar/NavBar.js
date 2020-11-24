import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import './NavBar.css'

const NavBar = (props) => {

  return (
    <header>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand>AMANDA ANDERSON</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink tag={Link} to="/">ABOUT</NavLink>
      <br></br>
      <NavLink tag={Link} to="/portfolio">PORTFOLIO</NavLink>
      <br></br>
      <NavLink tag={Link} to="/contact">CONTACT</NavLink>
    </Nav>
  </Navbar>
    </header>
  );
}

export default NavBar;