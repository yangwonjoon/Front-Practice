import { useState } from "react";
import '../App.css';
import { Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Product(props) {

    let [count, setCount] = useState([1]);
    const navigate = useNavigate();

    

    return (
        <>
            < Col className="col-4">
                <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" onClick={() => { navigate('/detail/' + props.i) }} />
                <h4>{props.shoes[props.i].title}</h4>
                <p>{props.shoes[props.i].content}</p>
            </Col >
        </>
    )
}

export default Product;