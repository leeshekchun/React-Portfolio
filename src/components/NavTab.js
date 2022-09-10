import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#header"
  onClick={() => handlePageChange("Header")}
        className={currentPage === "Header" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
        <Nav.Link  href="#about"
      onClick={() => handlePageChange("About")}
     className={currentPage === "About" ? "nav-link active" : "nav-link"}>About</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <a
    //       href="#header"
    //       onClick={() => handlePageChange("Header")}
    //       // This is a conditional (ternary) operator that checks to see if the current page is "Header"
    //       // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //       className={currentPage === "Header" ? "nav-link active" : "nav-link"}
    //     >
    //       Home
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
//  href="#about"
//       onClick={() => handlePageChange("About")}
//      Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//      className={currentPage === "About" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#experience"
    //       onClick={() => handlePageChange("Experience")}
    //       // Check to see if the currentPage is `Experience`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={
    //         currentPage === "Experience" ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Experience
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#projects"
    //       onClick={() => handlePageChange("Projects")}
    //       // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={
    //         currentPage === "Projects" ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Projects
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange("Contact")}
    //       // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //       className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
