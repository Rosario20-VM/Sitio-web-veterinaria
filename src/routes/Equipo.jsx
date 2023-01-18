import React from 'react'
import './Equipo.css'
import { Col, Row, Container, Button } from 'react-bootstrap'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import equipo from '../img/equipo.png'
import equipo2 from '../img/equipo2.png'
import equipo3 from '../img/equipo3.png'
import equipo4 from '../img/equipo4.png'
import equipo5 from '../img/equipo5.png'
import equipo6 from '../img/equipo6.png'
import { Link } from 'react-router-dom'
const Equipo = () => {
  return (
    <>
      <section id='titulo-equipo'>
        <br/>  
        <h2><b>Equipo</b></h2>
      </section>
      <Container>
        <Row>
          <Col xs={12} md={12} id='frase-inicio'>
            <p>La mejor tecnología para el bienestar de tu mascota.</p>          
          </Col>          
        </Row> 
        <Row>
          <Col xs={12} md={6} id='inf-equipo'>
            <p>En la clínica veterinaria la casa de los peluditos ofrecemos un equipo de especialistas a 
              toda disposición para el bienestar de tu mascota, el equipo que tenemos hace posible obtener 
              diagnósticos de la más alta calidad.</p> 
            <p>Contamos con médicos para cada servicios los cuales son cardiología, laboratorio clínico, 
              oftalmología, oncología, medicina interna, urgencias, cirugía, rehabilitación.</p> 
            <Button id='btn-agendar' as={Link}  to='/contacto' variant="secondary" size="lg" > Contactanos</Button>        
          </Col> 
          <Col xs={12} md={6}>
            <img src={equipo} alt="" />
          </Col>         
        </Row>
        <Row>
          <Col xs={12} md={12}>
          <img src={equipo4} alt="" />
          <img src={equipo4} alt="" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4}>
              <img src={equipo2} alt="" width={350} height={400}/>
          </Col>        
          <Col xs={12} md={4} id='inf-cont'>
              <p>Horarios </p>
              <p>Lunes a sabado</p>
              <p>9:00 hrs - 18:00 hrs</p>
              <Button id='btn-agendar' as={Link}  to='/cita' variant="secondary" size="lg" > Agenda tu cita</Button> 
              <p>Para una emergencia llama al Tel.(55) 6987-3669</p>
          </Col>
          <Col xs={12} md={2} id='img3'>
            <img src={equipo3} alt="" width={400} height={300}/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img src={equipo5} alt="" />
          </Col>
          <Col xs={12} md={6} id='inf-estetica'>
              <p>También contamos con nuestro equipo de estética donde cuidamos cada detalle de tu mascota, 
                  brindamos varios servicios entre ellos se encuentra baño, secado, corte de uñas y pelo, lavado
                  de dientes entre otros garantizamos que serán tratados con mucho cariño y respeto.</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <img src={equipo6} alt="" />
          </Col>
        </Row>
      </Container>

      <footer>
          <Container >
          <Row >
           <Col xs={4} md={2}>
                <img src={logo} alt="" 
                width={200}
                height={200}/> 
            </Col> 
            <Col xs={5} md={6}  id='footer-container'>
              <p>Clinica Veterinaria y estetica de mascotas</p>
              <p>La casa de los peluditos</p>
              <p>Av. Vicente Guerrero, Jilotepec, Estado de Mexico</p>
              <p>Tel.(55) 4004-3659</p>
            </Col>
            <Col xs={1} md={1} id='redes'>
              <a href="https://es-la.facebook.com/">
                <img src={facebook} alt="" 
                width={40}
                height={40}/>                
              </a>
            </Col>
            <Col xs={1} md={1} id='redes'>
            <a href="https://web.whatsapp.com/">
                <img src={whatsapp} alt="" 
                width={40}
                height={40}/>                
              </a>              
            </Col>
            <Col xs={1} md={1} id='redes'>
              <a href="https://www.instagram.com/">
                <img src={instagram} alt="" 
                width={40}
                height={40}/>                
              </a>
            </Col>           
          </Row>         
          </Container> 
        </footer> 
    </>
  )
}

export default Equipo