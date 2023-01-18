import React from 'react'
import { Carousel, Row, Col, Container, Button
} from 'react-bootstrap'
import perro2 from '../img/perro2.jpg'
import gato2 from '../img/gato2.jpg'
import gato3 from '../img/gato3.jpg'
import perro1  from '../img/perro1.jpg'
import inicio2 from '../img/inicio2.png'
import inicio3 from '../img/inicio3.png'
import galeria4 from '../img/galeria4.png'
import galeria2 from '../img/galeria2.jpg'
import galeria3 from '../img/galeria3.png'
import inicio5 from '../img/inicio5.png'
import inicio6 from '../img/inicio6.jpg'
import inicio1 from '../img/inicio1.png'
import servicios1 from '../img/servicios1.png'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import './Principal.css'
import { Link } from 'react-router-dom'


const Principal = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={perro1}
            width={200}
            height={500}
            alt="First slide"
          />
          <Carousel.Caption>           
            <p id='text-nav'>El mejor cuidado para tu mascota</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gato2}
            width={200}
            height={500}
            alt="Second slide"
          />        
          <Carousel.Caption>           
            <p id='text-nav'>El mejor cuidado para tu mascota</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={perro2}
            width={200}
            height={500}
            alt="Third slide"
          />
          <Carousel.Caption>           
            <p id='text-nav'>El mejor cuidado para tu mascota </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gato3}
            width={200}
            height={500}
            alt="Third slide"
          />
          <Carousel.Caption>            
            <p id='text-nav'> El mejor cuidado para tu mascota </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <section id='titulo-nosotros'>
        <br/>
        <h2><b>Nosotros</b></h2>
      </section>         
        <Container >        
          <Row xs={1} md={2} >
            <Col id='info'> <p>Somos una clínica veterinaria confiable con 10 años de experiencia médica, 
              nuestro grupo de especialistas están altamente capacitados para brindar la mejor atención a su mascota, 
              así mismo brindamos el servicio de estética para la higiene y bienestar de su compañero de vida. </p>                  
              </Col>
            <Col><img src={inicio1} alt="" /></Col>         
          </Row>          
        </Container>
        <section id='titulo-servicios'>
        <br/>
        <h2><b>Servicios</b></h2>
      </section>  
      <Container > 
        <Row xs={1} md={2} >
              <Col><img src={servicios1} alt="" /></Col> 
              <Col id='info-servicios'> <p>Contamos con mas de 30 servicios entre especialidades médicas y la estética de
                 mascotas todo con la mejor tecnología, en todos nuestros servicios su mascota será tratada con 
                  mucha responsabilidad para su cuidado. </p>  
                <Button id='btn-servicios' as={Link}  to="/servicios" variant="secondary" size="lg" > Nuestros servicios </Button>            
                </Col>                    
        </Row>      
      </Container>
      <section id='titulo-instalaciones'>
        <br/>
        <h2><b>Instalaciones</b></h2>
      </section> 
      <Container > 
        <Row xs={1} md={2} >             
              <Col id='info-servicios'> <p>Nuestras instalaciones cuentan con el equipo adecuado para realizar los servicios que ofrecemos</p>                
                <Button id='btn-servicios' as={Link}  to='/instalaciones' variant="secondary" size="lg" > Nuestras instalaciones </Button>            
              </Col>  
              <Col><img src={inicio3} alt="" /></Col>                   
        </Row>      
      </Container>
      <div id='galeria'>
        <br/><br/><h2><b>Galeria</b></h2>
        <Container >      
          <Row>
            <Col xs={6} md={4}>
            <img
              className="d-block w-100"
              src={inicio2}
              width={100}
              height={300}
              alt=" "
            />
            </Col>
            <Col xs={6} md={4} id='gato'>
            <img
              className="d-block w-100"
              src={inicio5}
              width={100}
              height={310}
              alt=" "
            />
            </Col>
            <Col xs={12} md={4} id='perro'>
            <img
              className="d-block w-100"
              src={inicio6}
              width={100}
              height={210}
              alt=" "
            />
            </Col>
          </Row><br/>
          <Row>
          <Col >
          <h1>Agenda tu cita</h1>
          <h3>Puedes agendar tu cita desde cualquier lugar,<br/>has click y
            ve el espacio en nuestra agenda.
          </h3>
          <Button id='btn-agendar' as={Link}  to='/citas' variant="secondary" size="lg" > Agenda </Button>          
          
          </Col>
          </Row>
          <Row>
            <Col xs={6} md={4}>
            <img
              className="d-block w-100"
              src={galeria4}
              width={100}
              height={300}
              alt=" "
            />
            </Col>
            <Col xs={6} md={4} id='gato2'>
            <img
              className="d-block w-100"
              src={galeria2}
              width={100}
              height={225}
              alt=" "
            />
            </Col>
            <Col xs={12} md={4} id='perro2'>
            <img
              className="d-block w-100"
              src={galeria3}
              width={100}
              height={310}
              alt=" "
            />
            </Col>
          </Row>        
        </Container>
        </div>
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

export default Principal