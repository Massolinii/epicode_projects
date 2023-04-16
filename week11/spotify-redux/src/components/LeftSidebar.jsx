import React from "react";
import { useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";

import { Link } from "react-router-dom";

import { FaHome, FaBookOpen } from "react-icons/fa";
import logo from "../imgs/logo/Spotify_Logo.png";

import { InputGroup, FormControl, Button, Col } from "react-bootstrap";

const LeftSidebar = (props) => {
  const currentTrack = useSelector((state) => state.currentTrack);
  return (
    <div className="d-flex flex-column">
      <Navbar bg="navbar" variant="light" fixed="left">
        <div>
          <Link to="/home">
            <Navbar.Brand>
              <div className="center">
                <img
                  src={logo}
                  alt="Spotify_Logo"
                  width="131"
                  height="40"
                  className="mb-5"
                />
              </div>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column">
              <Nav.Link href="/home">
                <FaHome size={20} className="me-2" /> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/favorites">
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
          <div className="light-grey">
            <span>Cookie Policy</span> | <span>Privacy</span>
          </div>
        </div>
      </Navbar>
      <div>
        {currentTrack && (
          <Col xs={4} md={3} className="current-track">
            <img src={currentTrack.album.cover_small} alt="Track Cover" />
            <p>{currentTrack.title}</p>
          </Col>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;
