import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link, useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
    
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">RERAL STATE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
            <Nav.Link href="#features">gallery</Nav.Link>
            <Nav.Link href="#features">Services</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   
    </>
  );
}

export default ColorSchemesExample;