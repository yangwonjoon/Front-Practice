import { Col } from "react-bootstrap";

function Product(props) {

    return (
        <Col sm>
            <img src={'https://codingapple1.github.io/shop/shoes' + ((props.i) + 1) + '.jpg'} width="80%" />
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
        </Col>
    )
}

export default Product;