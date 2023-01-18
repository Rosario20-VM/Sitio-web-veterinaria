import React from 'react'
import './Servicios.css'
import { Card, Container, Row, Col, Button} from 'react-bootstrap'
import servicios2 from '../img/servicios2.png'
import servicios3 from '../img/servicios3.png'
import servicios4 from '../img/servicios4.png'
import servicios5 from '../img/servicios5.png'
import servicios6 from '../img/servicios6.png'
import servicios7 from '../img/servicios7.png'
import servicios8 from '../img/servicios8.png'
import servicios9 from '../img/servicios9.png'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import estetica1 from '../img/estetica1.png'
import huella from '../img/huella.png'
import servicioInicio from '../img/servicioInicio.png'
import { Link } from 'react-router-dom'

const Servicios = () => {
  return (
    <>
      <section id='titulo-servicios'>
        <br/>  
        <h2 ><b>Nuestros servicios</b></h2>
      </section>
      <br/>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3 id='info-serv'> Brindamos la mejor atención para tu mascota </h3>   
            <Button id='btn-agendar' as={Link}  to='/citas' variant="secondary" size="lg" > Agenda tu cita</Button> 
          </Col>
          < Col xs={12} md={6}>
            <img src={servicioInicio} alt="" />
          </Col>
        </Row>
        <Row id='fila-uno'>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios2} />
              <Card.Title><b>Cardiología</b></Card.Title>              
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios3} />            
                <Card.Title><b>Laboratorio Clínico</b></Card.Title>                           
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios4} />            
                <Card.Title><b>Oftalmología</b></Card.Title>                             
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem'}}>
              <Card.Img variant="top" src={servicios5} />             
                <Card.Title><b>Oncología</b></Card.Title>                            
            </Card>
          </Col>                    
        </Row>
        <Row id='fila-uno'>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios6} />             
                <Card.Title><b>Medicina Interna</b></Card.Title>                
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios7} />              
                <Card.Title><b>Urgencias</b></Card.Title>               
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={servicios8} />              
                <Card.Title><b>Cirugía</b></Card.Title>                              
            </Card>
          </Col>
          <Col xs={6} md={3}>
            <Card style={{ width: '15rem'}}>
              <Card.Img variant="top" src={servicios9} />           
                <Card.Title><b>Rehabilitación</b></Card.Title>               
            </Card>
          </Col>                    
        </Row>        
      </Container>
      <section id='titulo-servicios'>
        <br/>  
        <h2 ><b>Servicios de Estetica</b></h2>
      </section> 
      <Container>
        <Row >
          <Col xs={12} md={8}> <img src={estetica1} alt=""/> </Col>
          <Col xs={12} md={4} id='imagenes'>                                       
          <p><img src={huella} alt="" width={40} height={40}/> Baño con agua tibia</p>
          <p><img src={huella} alt="" width={40} height={40}/> Secado</p>
          <p><img src={huella} alt="" width={40} height={40}/> Corte y rape</p>
          <p><img src={huella} alt="" width={40} height={40}/> Corte de uñas</p>
          <p><img src={huella} alt="" width={40} height={40}/> Lavado de dientes</p>
          <p><img src={huella} alt="" width={40} height={40}/> Limpieza de oidos</p>
          <p><img src={huella} alt="" width={40} height={40}/> Limpieza de lagrimales</p>
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

export default Servicios