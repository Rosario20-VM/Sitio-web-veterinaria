import React from 'react'
import './Cita.css'
import { Col, Row, Container, Form, Button } from 'react-bootstrap'
import facebook from '../img/facebook.png'
import whatsapp from '../img/whatsapp.png'
import instagram from '../img/instagram.png'
import logo from '../img/logo.png'
import agenda1 from '../img/agenda1.png'
import axios from 'axios'
import { useState, useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';


const URL = 'http://localhost:9000/citas/'

const Cita = () => {
  const[nombre, setNombre] = useState('')
    const[apellido, setApellido] = useState('')
    const[mascota, setMascota] = useState('')
    const[raza, setRaza] = useState('')
    const[edad, setEdad] = useState('')
    const[fecha, setFecha] = useState('')
    const[hora, setHora] = useState('')
    const[telefono, setTelefono] = useState('')
    const[correo, setCorreo] = useState('')
    const navigate = useNavigate()

    const[show, setShow] = useState(false)
    const[target, setTarget] = useState(null)
    const ref = useRef(null)

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };


    //procedimiento para guardar
    const guardar = async(e) =>{
        e.preventDefault()
        await axios.post(URL,{nombre:nombre, apellido:apellido,
        mascota:mascota, raza:raza, edad:edad, fecha:fecha,
        hora:hora, telefono:telefono, correo:correo })
        Swal.fire({
          icon:'success',
          title:'Cita agendada correctamente, nos pondremos en contacto para verificar tu cita'
        })
        navigate('/')
    }

  return (
    <>
      <section id='titulo-cita'>
        <br/>  
        <h2><b>Agendar cita</b></h2>
      </section>
       <Container>         
       <Row>
          <Col xs={12} md={12} id='inf-agen'>
              <p>Llena los campos con tu información para poder agendar tu cita, revisa nuestros horarios para verificar en que horario que te podemos atender.</p> 
              <div ref={ref}>
                  <Button onClick={handleClick}  variant="secondary" id="btnHorarios">Horarios</Button>
                  <Overlay
                    show={show}
                    target={target}
                    placement="bottom"
                    container={ref}
                    containerPadding={20}
                  >
                    <Popover id="popover-contained">
                      <Popover.Header as="h3">Informacion de los horarios </Popover.Header>
                      <Popover.Body>
                        <strong>Atención de Lunes a sabado en un horario de 9:00 hrs - 18 hrs.</strong> Considera nuestros horarios al realizar tu cita.
                      </Popover.Body>
                    </Popover>
                  </Overlay>
                </div>          
          </Col>          
        </Row>
        <Form onSubmit={guardar}>
          <Row>
            <Col xs={12} md={4}>
            
                <Form.Group className="mb-3" >              
                  <Form.Control type="text" placeholder="Nombre" size="lg" id='text-style' name="nombre" required
                  value={nombre} onChange={(e) => setNombre(e.target.value)}/>              
                </Form.Group>
            
              
            </Col>
            <Col  xs={12} md={4}>
            
              <Form.Group className="mb-3" >             
                <Form.Control type="text" placeholder="Apellido" size="lg" id='text-style' name="apellido" required
                 value={apellido} onChange={(e) => setApellido(e.target.value)}/>
              </Form.Group> 
          
          
            </Col>
            <Col  xs={12} md={4}>
            
                <Form.Group className="mb-3" controlId="formBasicEmail">              
                  <Form.Control type="email" placeholder="name@example.com" size="lg" id='text-style' name="email" required
                  value={correo} onChange={(e) => setCorreo(e.target.value)}/>              
                </Form.Group> 
                              
            </Col>
          </Row>      
            <Row>
              <Col xs={12} md={4}>
            
                <Form.Group className="mb-3">             
                  <Form.Control type="text" placeholder="Telefono" size="lg" id='text-style' name="telefono" required
                  value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Group> 
              
              </Col>
              <Col xs={12} md={4}>
            
                <Form.Group className="mb-3">             
                  <Form.Control type="text" placeholder="Raza" size="lg" id='text-style' name="raza" required
                  value={raza} onChange={(e) => setRaza(e.target.value)}/>
                </Form.Group> 
        
              </Col>
              <Col xs={12} md={4}>
            
                <Form.Group className="mb-3">             
                  <Form.Control type="text" placeholder="Mascota" size="lg" id='text-style' name="mascota" required
                  value={mascota} onChange={(e) => setMascota(e.target.value)}/>
                </Form.Group> 
            
              </Col>
            </Row>        
            <Row>
              <Col xs={12} md={4}>
              <Form.Group className="mb-3">             
                  <Form.Control type="text" placeholder="Edad de la mascota" size="lg" id='text-style' name="edad" required
                  value={edad} onChange={(e) => setEdad(e.target.value)}/>
                </Form.Group> 

              </Col>
              <Col xs={12} md={4}>
              <Form.Group className="mb-3">             
                  <Form.Control type="date" placeholder="Elige la fecha" size="lg" id='text-style' name="fecha" required
                  value={fecha} onChange={(e) => setFecha(e.target.value)}/>
                </Form.Group> 
                
              </Col>              
              <Col xs={12} md={4}>
              <Form.Group className="mb-3">             
                  <Form.Control type="text" placeholder="Elige la hora" size="lg" id='text-style' name="hora " required
                  value={hora} onChange={(e) => setHora(e.target.value)}/>
                </Form.Group> 
                
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Button type="submit" variant="secondary" size="lg" id='btn-agendar'>
                Agenda tu cita
                </Button>
              </Col>                          
            </Row>
        </Form>
          

        <Row>
          <Col xs={12} md={6}>
          <img src={agenda1} alt="" />
          </Col>
          <Col xs={12} md={6}>
          <p id="inf-a">Una vez agendada la cita nos podremos en contacto contigo. </p>
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

export default Cita