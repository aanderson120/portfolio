import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css'

const NavBar = (props) => {

  return (
    <header>
        <Navbar variant="dark">
            <Navbar.Brand>AMANDA ANDERSON</Navbar.Brand>
          <Nav className="mr-auto">
              <Link tag={Link} to="/">ABOUT &nbsp;</Link>
              <br></br>
              <Link tag={Link} to="/portfolio">PORTFOLIO &nbsp;</Link>
          </Nav>
        </Navbar>

    </header>
  );
}

export default NavBar;