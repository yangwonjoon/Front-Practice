import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const Detail = ({ shoes }) => {

    let parm = useParams();
    let shoe = shoes.filter(shoe => shoe.id == parm.id)
    const [sale, setSale] = useState(true)

    useEffect(() => {
        let a = setTimeout(() => {
            setSale(false)
        }, 2000);

        return () => {
            clearTimeout(a)
        }
    })


    return (
        <div className="container">
            {
                sale
                    ? <div className="alert alert-warning">
                        2초내에 구매시 할인
                    </div>
                    : null
            }
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