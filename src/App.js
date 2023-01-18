
import './App.css';
import Inicio from './components/Inicio';
import Cita from './routes/Cita'
import Contacto from './routes/Contacto'
import Equipo from './routes/Equipo'
import Instalaciones from './routes/Instalaciones'
import Principal from './routes/Principal'
import Servicios from './routes/Servicios'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}>
            <Route index element={<Principal/>}></Route>
            <Route path='/citas' element={<Cita/>}></Route>
            <Route path='/equipo' element={<Equipo/>}></Route>
            <Route path='/contacto' element={<Contacto/>}></Route>
            <Route path='/instalaciones' element={<Instalaciones/>}></Route>           
            <Route path='/servicios' element={<Servicios/>}></Route>            
            <Route path='*' element={<Navigate replace to="/"/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
