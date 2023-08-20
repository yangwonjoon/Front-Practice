import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Navbar, Row, Col } from 'react-bootstrap'
import data from './data/data.js';
import Detail from './component/Detail';
import Product from './component/Product';
import Cart from './component/Cart';
import { useState, useEffect } from 'react';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes, setShoes] = useState(data);
  let [name, setName] = useState([]);
  let navigate = useNavigate();
  let [count, setCount] = useState(1);
  let [load, setLoad] = useState(1);
  let [fade, setFade] = useState('');

  useEffect(() => {

    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", '[]')
    }
  }, [])

  return (
    <div className="App">

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"}><Nav.Link href="/">Home</Nav.Link ></Link>
            <Link to={"/detail"}><Nav.Link href="/detail/0">detail</Nav.Link></Link>
            <Link to={"/cart"}><Nav.Link href="/cart">cart</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<>

          <div className='back'></div>

          <Container>

            <Row className='row'>
              {
                shoes.map(function (a, i) {
                  return (
                    <Product shoes={shoes} i={i} key={i}></Product>
                  )
                })
              }
            </Row>

            {
              count > 2
                ? null
                : <button onClick={() => {
                  setLoad(0);
                  if (count == 1) {
                    axios.get('https://codingapple1.github.io/shop/data2.json').then((response) => {

                      let copy = [...shoes, ...response.data];
                      setShoes(copy)
                    }).catch(() => {
                      console.log('axios 실패')
                    })
                  }
                  if (count == 2) {
                    axios.get('https://codingapple1.github.io/shop/data3.json').then((response) => {
                      let copy = [...shoes, ...response.data];
                      setShoes(copy)
                    }).catch(() => {
                      console.log('axios 실패')
                    })
                  }
                  setCount(count + 1)

                  setLoad(1);
                }}>더 보기</button>
            }

            {load == 0 ? <p>로딩중</p> : null
            }
            <button onClick={() => {

              let copy = [...shoes];
              copy.sort((a, b) => a.title < b.title ? -1 : 1)
              setShoes(copy)

            }}>가나다순 정렬</button>

          </Container></>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes} ></Detail>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>

      </Routes>

    </div >
  );
}

export default App;
