import { useParams } from "react-router-dom";
import data from "../data.js";
import { useState } from "react";

function Detail(props) {

    let { id } = useParams();
    let detail = props.shoes.find(function (x) {
        return x.id == id
    });
    let [hi] = useState(data);
    console.log(hi.length);

    return (
        <>
            {
                id < hi.length ?
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={detail.img} width="100%" />
                            </div>
                            <div className="col-md-6">
                                <h4 className="pt-5">{detail.title}</h4>
                                <p>{detail.content}</p>
                                <p>{detail.price}</p>
                                <button className="btn btn-danger">주문하기</button>
                            </div>
                        </div>
                    </div> :
                    <div>없는 페이지임</div>
        }

        </>
    )
}

export default Detail;