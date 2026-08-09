import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import  Home from './Componentes/Paginas/Home'
import Contato from './Componentes/Paginas/Contato'
import Login from './Componentes/Paginas/Login'
import Cadastro from './Componentes/Paginas/Cadastro'

import Navbar from './Componentes/Layout/Navbar'
import Box from './Componentes/Layout/Box'
import Footer from './Componentes/Layout/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Box customClass='min-height'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/cadastro" element={<Cadastro/>} />
        </Routes>
      </Box>
      <Footer/>
    </Router>
  );
}

export default App;
