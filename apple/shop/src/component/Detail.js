import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productPlus } from "../store";
import { useEffect } from "react";

function Detail(props) {

    let data = useSelector((state) => state.cart)
    // let [tab, setTab] = useState(0);
    // let [fade, setFade] = useState('')
    let dispatch = useDispatch();

    let { id } = useParams();
    let detail =
        data.find(function (x) {
            return x.id == id
        });


    useEffect(() => {

        let recent = JSON.parse(localStorage.getItem('watched'));
        recent.push(id)
        let result = [...new Set(recent)]
        localStorage.setItem('watched', JSON.stringify(result))

    }, [id])

    return (
        <>
            {
                id < data.length ?
                    <div className={"container"} >

                        <div className="row">
                            <div className="col-md-6">
                                <img src={detail.img} width="100%" />
                            </div>
                            <div className="col-md-6">
                                <h4 className="pt-5">{detail.title}</h4>
                                <p>{detail.content}</p>
                                <p>{detail.price}</p>
                                <button className="btn btn-danger" onClick={() => {
                                    dispatch(productPlus(detail))
                                }}>주문하기</button>
                            </div>

                        </div>
                    </div >
                    :
                    <div>없는 페이지임</div>
            }
        </>
    )
}

export default Detail;