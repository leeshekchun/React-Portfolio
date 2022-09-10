import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#header"
            onClick={() => handlePageChange("Header")}
            className={
              currentPage === "Header" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#experience"
            onClick={() => handlePageChange("Experience")}
            className={
              currentPage === "Experience" ? "nav-link active" : "nav-link"
            }
          >
            Experience
          </Nav.Link>

          <Nav.Link
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </Nav.Link>

          <Nav.Link
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavTabs;
