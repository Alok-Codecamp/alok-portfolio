import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import myResume from '../../../Rezumi/Alok Kumar.docx.pdf'

const Navigation = () => {
    return (
        <div>
            <Navbar variant="dark" bg="primary"  expand="lg">
  <Container>
    <Navbar.Brand to="home">Alok.me</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavLink style={{color:'white',textDecoration:"none", marginRight:'20px'}} to="/home">Home</NavLink>
        <a style={{color:'white',textDecoration:"none",marginRight:'20px'}} href="#projects">Projects</a>
        <NavLink style={{color:'white',textDecoration:"none",marginRight:'20px'}} to="/about">About</NavLink>
        <a style={{color:'white',textDecoration:"none",marginRight:'20px'}} href="#contact">Contact</a>
        <NavLink style={{color:'white',textDecoration:"none",marginRight:'20px'}} to="/blog">Blog</NavLink>
        <a style={{color:'white',textDecoration:"none",marginRight:'20px'}} href={myResume} download="Alok_Resume">Download Resume</a>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
    );
};

export default Navigation;