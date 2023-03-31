import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';

function NetflixNavbar() {
  return (
    <Navbar bg="black" variant="black" expand="sm" className="navbar pe-2">
      <Navbar.Brand href="#home">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width="100"
          className="d-inline-block align-top"
          alt="Logo_Netflix"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <div className="d-flex justify-content-between w-100">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto text-white">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#tvshows">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-white" href="#movies">
              Movies
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/*Doppia immagine profile pic, una per la navbar aperta e una per la navbar collassata (collassata come me dopo 9 ore di codice)*/}
        <Nav className="ml-auto">
          <Nav.Item className="d-none d-sm-block">
            <img
              src="https://i.pinimg.com/474x/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f--netflix-love-this.jpg"
              width="40"
              height="40"
              className="rounded-circle"
              alt="Profile_Pic"
            />
          </Nav.Item>
        </Nav>
      </div>
      <Nav className="ml-auto d-block d-sm-none">
        <Nav.Item className="text-center">
          <img
            src="https://i.pinimg.com/474x/d8/70/20/d87020c70b0bf5eec4918874fa7d0f9f--netflix-love-this.jpg"
            width="40"
            height="40"
            className="rounded-circle profile-pic"
            alt="Profile_Pic"
          />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NetflixNavbar;