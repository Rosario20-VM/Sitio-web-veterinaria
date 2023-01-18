import React, { useState } from 'react'
import './Contacto.css'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import contacto from '../img/contacto.png'
import contacto2 from '../img/contacto2.png'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


const Contacto = () => {
   
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')
  
    const limpiarCorreo = (c) =>{
      setCorreo(c.target.value)            
    }
     const limpiarNombre = (n) => {
      setNombre(n.target.value)
     }
     const limpiarApellido = (a) => {
      setApellido(a.target.value)
     }
     const limpiarMensaje = (m) => {
      setMensaje(m.target.value)
     }

    function enviarEmail(e){
      e.preventDefault();
      emailjs.sendForm('service_cwigtnz','template_2uoxgma',e.target,'mQw6Pb4O_boBS6Z_L').then(res=>{
        Swal.fire({
          icon:'success',
          title:'Mensaje enviado correctamente'
        })
      })
      setNombre('')
      setApellido('')
      setCorreo('')
      setMensaje('')

    }
  return (
    <>
      <section id='titulo-contacto'>
        <br/>  
        <h2><b>Contacto</b></h2>
      </section>
      <Container>
        <Row>
          <Col xs={12} md={12} id='text-cont'>
            <p> Escríbenos si tienes alguna duda, te atenderemos con gusto</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <img src={contacto} alt="" />
          </Col>
          <Col xs={12} md={6} id='text-email'>
          <p id='cont'>Contactanos</p>
          <Form onSubmit={enviarEmail}>
            <Form.Group className="mb-3" >              
              <Form.Control type="text" placeholder="Nombre" size="lg" id='text-style' name="nombre"  value={nombre} onChange={limpiarNombre} required/>              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">             
              <Form.Control type="text" placeholder="Apellido" size="lg" id='text-style' name="apellido" value={apellido} onChange={limpiarApellido}required/>
            </Form.Group> 

            <Form.Group className="mb-3" controlId="formBasicEmail">              
              <Form.Control type="email" placeholder="Email" size="lg" id='text-style' name="email" value={correo} onChange={limpiarCorreo} required/>              
            </Form.Group>            

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">              
              <Form.Control as="textarea" rows={5} placeholder="Mensaje" size="lg" id='text-style' name="mensaje" value={mensaje} onChange={limpiarMensaje} required/>
            </Form.Group>
                       
            <Button type="submit" variant="secondary" size="lg" id='btn-agendar'>
              Enviar
            </Button>
          </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <p id='frase'>"Hasta que no hayas amado a un animal, una parte de tu alma permanecerá dormida", Anatole France.</p>   
            <Button id='btn-agendar' as={Link}  to='/citas' variant="secondary" size="lg" > Agenda tu cita</Button> 
                 
          </Col>
          
          <Col xs={12} md={6}>
            <img src={contacto2} alt="" />          
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

export default Contacto