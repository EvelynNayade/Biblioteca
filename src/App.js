import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import  Home from './Componentes/Paginas/Home'
import Contato from './Componentes/Paginas/Contato'
import PlaceHolder2 from './Componentes/Paginas/PlaceHolder2'
import PlaceHolder3 from './Componentes/Paginas/PlaceHolder3'

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
          <Route exact path="/place2" element={<PlaceHolder2/>} />
          <Route exact path="/place3" element={<PlaceHolder3/>} />
        </Routes>
      </Box>
      <Footer/>
    </Router>
  );
}

export default App;
