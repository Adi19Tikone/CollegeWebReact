import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import logo from '../../src/utils/images/PCETPCU1-Picsart-AiImageEnhancer.png';
import logoRight from '../../src/utils/images/PCET 1 TRANSPARENT LOGO.png';
import './Navbar.css';

function NavbarComp() {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="College Logo"
            height="75"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>

            {/* ⬇ Replace "About Us" Nav.Link with Dropdown */}
            <NavDropdown title="About Us" id="about-dropdown">
              <NavDropdown.Item as={NavLink} to="/about">
                About Department
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hod">
                HOD Desk
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="People" id="people-dropdown">
              <NavDropdown.Item as={NavLink} to="/people/faculty">Faculty</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/people/admin-staff">Admin Staff</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/people/non-teaching">Non-Teaching Staff</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/academics">Academics</Nav.Link>
            <Nav.Link as={NavLink} to="/research">Research</Nav.Link>
            <Nav.Link as={NavLink} to="/student-corner">Student Corner</Nav.Link>
            <Nav.Link as={NavLink} to="/placements">Placements</Nav.Link>
            <Nav.Link as={NavLink} to="/achievements">Student Achievements</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="d-none d-lg-block">
          <img
            src={logoRight}
            alt="Trust Logo"
            height="75"
            className="d-inline-block align-top ms-2"
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;