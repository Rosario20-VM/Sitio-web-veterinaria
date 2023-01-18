import React from 'react'
import './Instalaciones.css'
import {Container, Row, Col, Carousel, Button} from 'react-bootstrap'
import instalaciones1 from '../img/instalaciones1.png'
import instalaciones2 from '../img/instalaciones2.png'
import instalaciones3 from '../img/instalaciones3.png'
import instalaciones4 from '../img/instalaciones4.png'
import instalaciones6 from '../img/instalaciones6.png'
import instalaciones5 from '../img/instalaciones5.png'
import servicios3 from '../img/servicios3.png'
import servicios6 from '../img/servicios6.png'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import casita from '../img/casita.png'
import veterinario from '../img/veterinario.png'
import { Link } from 'react-router-dom'

const Instalaciones = () => {
  return (
    <>
    <section id='titulo-intalaciones'>
        <br/>  
        <h2 ><b>Instalaciones</b></h2>
      </section>
      <Container>
        <Row>
          <Col xs={12} md={6} id='info-inst'>
            <p>La casa de los peluditos es una clínica veterinaria y estética de mascotas
            que tenemos como objetivo brindarle un servicio de calidad, contamos con instalaciones 
            con tecnología y con un gran equipo de especialistas que están capacitados para dar la 
            mejor de las atenciones. </p><br/>
            <img src={casita} alt="" width={100} height={100}/><br/>     
            <Button id='btn-agendar' as={Link}  to='/citas' variant="secondary" size="lg" > Agenda tu cita</Button> 
          </Col>
          <Col><img src={instalaciones1} alt=""/></Col> 
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Carousel variant="dark">
              <Carousel.Item>
                <img                
                  src={instalaciones2}
                  width={700}
                  height={500}
                  alt=""
                />                       
              </Carousel.Item>
              <Carousel.Item>
                <img          
                  src={instalaciones3}
                  width={500}
                  height={500}
                  alt=""
                />                      
              </Carousel.Item>
              <Carousel.Item>
                <img          
                  src={instalaciones4}
                  width={500}
                  height={500}
                  alt=""
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img          
                  src={servicios6}
                  width={500}
                  height={500}
                  alt=""
                />                
              </Carousel.Item>
              <Carousel.Item>
                <img          
                  src={servicios3}
                  width={500}
                  height={500}
                  alt=""
                />                
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} md={6} id='text-feliz'>
            <p>Queremos ver a tu mascota feliz</p>
            <img src={veterinario} alt="" width={150} height={150}/>
          </Col>         
        </Row>
        <Row>
          <Col xs={12} md={4}>
            <img src={instalaciones5} alt=""/>          
          </Col>
          <Col xs={12} md={3} id='text2-inst'>
            <p>Nuestras instalaciones cuentan con el equipo adecuado para realizar los servicios que ofrecemos</p>         
            <Button id='btn-servicios' as={Link}  to="/servicios" variant="secondary" size="lg" > Nuestros servicios </Button> 
          </Col>
          <Col xs={12} md={1}>
            <img src={instalaciones6} alt=""/>          
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
              <p>Tel. 5540043659</p>
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

export default Instalaciones