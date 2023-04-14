import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FaHome, FaBookOpen } from "react-icons/fa";
import logo from "../imgs/logo/Spotify_Logo.png";
import { Link } from "react-router-dom";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const LeftSidebar = (props) => {
  return (
    <Navbar bg="navbar" variant="light" fixed="left" expand="sm">
      <div className="nav-container">
        <Link to="/">
          <Navbar.Brand>
            <img
              src={logo}
              alt="Spotify_Logo"
              width="131"
              height="40"
              className="mb-5"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="/">
              <FaHome size={20} className="me-2" /> Home
            </Nav.Link>
            <Nav.Link href="#">
              <FaBookOpen size={20} className="me-2" /> Your Library
            </Nav.Link>
            <Nav.Link>
              <InputGroup className="mt-3">
                <FormControl
                  id="searchField"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  onChange={(e) => props.setSearchQuery(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  className="btn-sm"
                  onClick={props.handleSearch}
                >
                  GO
                </Button>
              </InputGroup>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="nav-btn">
        <button className="signup-btn">Sign Up</button>
        <button className="login-btn">Login</button>
        <div className="ml-2">
          <span>Cookie Policy</span> | <span>Privacy</span>
        </div>
      </div>
    </Navbar>
  );
};

export default LeftSidebar;
