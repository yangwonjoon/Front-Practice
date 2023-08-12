import { Col } from "react-bootstrap";

function Product(props) {

    return (
        <Col sm>
            <img src={props.shoes[props.i].img} width="80%" />
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
        </Col>
    )
}

export default Product;