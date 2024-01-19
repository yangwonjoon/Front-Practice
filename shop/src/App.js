import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import data from './data.js';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Main } from './pages/main.js';
import { Detail } from './pages/detail.js';

function App() {

  const [shoes, setShoes] = useState(data);
  //good

  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">

            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Link to="detail"><Nav.Link href="#features">Detail</Nav.Link></Link>

          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={<Main shoes={shoes}></Main>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes}></Detail>} />
        <Route path="/about" />
        <Route path='*' element={<>404페이지</>}></Route>
      </Routes>

    </div>

  )
}

export default App;
