import React from 'react'
import { Nav, Navbar, Container} from 'react-bootstrap'
import {Link, Outlet } from 'react-router-dom'


const Inicio = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="ligth" variant="ligth">
      <Container>  
      <Navbar.Brand as={Link} to="/">
            <img
              src="./logo.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>       
        <Navbar.Brand as={Link} to="/"> 
        <img
              src="./titulo.png"
              width="150"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Inicio</Nav.Link>            
            <Nav.Link as={Link} to="/servicios"> Servicios</Nav.Link>
            <Nav.Link as={Link} to="/equipo"> Equipo</Nav.Link>
            <Nav.Link as={Link} to="/instalaciones"> Instalaciones</Nav.Link>            
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/contacto"> Contacto</Nav.Link>
            <Nav.Link as={Link} to="/citas"> Agendar cita</Nav.Link>            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
      <Outlet></Outlet>
    </section>
   
      

    </>
  )
}

export default Inicio