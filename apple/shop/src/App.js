import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap'
import data from './data.js';
import Detail from './component/Detail';
import Product from './component/Product';
import { useState } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes, setShoes] = useState(data);
  let [name, setName] = useState([]);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
              <Nav className="me-auto">
                <Link to={"/"}><Nav.Link href="#home">Home</Nav.Link ></Link>
                <Link to={"/detail"}><Nav.Link href="#features">detail</Nav.Link></Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <div className='back'></div>

          <Container>

            <Row>
              {
                shoes.map(function (a, i) {
                  return (
                    <Product shoes={shoes} i={i}></Product>
                  )
                })
              }
            </Row>
          </Container></>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} ></Detail>}></Route>

      </Routes>

      <button onClick={() => {

        let copy = [...shoes];
        copy.sort((a, b) => a.title < b.title ? -1 : 1)
        setShoes(copy)
        console.log(copy);
      }}>가나다순 정렬</button>

      <button onClick={() => { navigate('/detail') }}>detail</button>
      <button onClick={() => { navigate('/') }}>home</button>

    </div >
  );
}

export default App;
