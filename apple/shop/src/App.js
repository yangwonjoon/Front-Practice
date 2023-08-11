import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap'
import data from './data.js';
import { useState } from 'react';

function App() {

  let [shoes, setShoes] = useState(data)

  return (
    <div className="App">


      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
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
      </Container>
    </div>
  );
}

function Product(props) {

  return (
    <Col sm>
      <img src={'https://codingapple1.github.io/shop/shoes' + ((props.i) + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
    </Col>

  )
}

export default App;
