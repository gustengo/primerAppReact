import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav'

function Navegador() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          E - Commerce
        </Navbar.Brand>
        <Nav.Link href="#home2">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Navegador;
