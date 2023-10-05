import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/your-cities", label: "Favourites" },
];

function BottomNavbar() {
  return (
    <Navbar bg="light" expand="sm" fixed="bottom" className="navBar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/Weather-logo.png" alt="Your Site Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0">
            {navLinks.map((link, index) => (
              <Link key={index} to={link.path} className="nav-link">
                {link.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BottomNavbar;
