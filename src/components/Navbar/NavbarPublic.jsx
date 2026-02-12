import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {useNavigate } from "react-router";
import "./navbar.css";

export const NavbarPublic = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setExpanded(false);
    navigate(path);
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="navbar-custom"
      variant="dark"
      >
      <Container fluid>

      <Navbar.Toggle  onClick={() => setExpanded(!expanded)} />

        <Navbar.Collapse>
          <Nav className="navbar-nav-center">
            <Nav.Link onClick={() => handleNavigate("/")}>
              Inicio
            </Nav.Link>

            <Nav.Link onClick={() => handleNavigate("/about")}>
              Sobre mí
            </Nav.Link>

            <NavDropdown title="Programación" id="services-dropdown">
              <NavDropdown.Item className="services-dropdown-espcf" onClick={() => handleNavigate("/skills")}>
                Skills
              </NavDropdown.Item>
              <NavDropdown.Item className="services-dropdown-espcf" onClick={() => handleNavigate("/proyects")}>
                Proyectos
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link onClick={() => handleNavigate("/contact")}>
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
