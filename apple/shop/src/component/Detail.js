import { useParams } from "react-router-dom";
import data from "../data.js";
import { useEffect, useState } from "react";
import styled from 'styled-components'

let Btn = styled.button`
    background : ${props => props.bg};
    color : ${props => props.bg == 'blue' ? 'white' : 'black'}
`

function Detail(props) {

    let [hi] = useState(data);
    let [sale, setSale] = useState(0);
    let [num, setNum] = useState(0);
    let [non, setNon] = useState('');


    useEffect(() => {
        setTimeout(() => {
            setSale(1);
        }, 2000);
    }, [])

    useEffect(() => {
        isNaN(non) ? setNum(1) : setNum(0)
    }, [non])

    let { id } = useParams();
    let detail = props.shoes.find(function (x) {
        return x.id == id
    });

    return (
        <>
            {
                sale == 0 ? <div className="alert">
                    2초 후에 사라짐
                </div> : null
            }
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

                        {num == 1 ? <div>문자</div> : null}
                        <input type="text" onChange={(e) => { setNon(e.target.value) }}></input>
                    </div>
                    :
                    <div>없는 페이지임</div>
            }
        </>
    )
}

export default Detail;