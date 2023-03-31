import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

function NetflixNavbar() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Navbar.Brand href="#home">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width="100"
            className="d-inline-block align-top"
            alt="Logo_Netflix"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    );
  }
  
  export default NetflixNavbar;