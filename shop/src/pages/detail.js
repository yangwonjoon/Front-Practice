import { useParams } from "react-router-dom"

export const Detail = ({ shoes }) => {

    let parm = useParams();
    let shoe = shoes.filter(shoe => shoe.id == parm.id)
    console.log(shoes)
    console.log(shoe)
    console.log(parm.id)


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{shoe[0].title}</h4>
                    <p>{shoe[0].content}</p>
                    <p>{shoe[0].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>

    )
}