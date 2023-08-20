import { useParams, } from "react-router-dom";
import { Nav } from 'react-bootstrap'
import data from '../data/data';
import { useEffect, useState } from "react";


function Detail(props) {

    let [hi] = useState(data);
    let [tab, setTab] = useState(0);
    let [fade, setFade] = useState('')

    let { id } = useParams();
    let detail = props.shoes.find(function (x) {
        return x.id == id
    });

    useEffect(() => {
        setTimeout(() => {
            setFade('end')
        }, 100);
        return () => {
            setFade('')
            clearTimeout();
        }
    }, [hi])

    return (
        <>

            {
                id < hi.length ?
                    <div className={"container start " + fade} >

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

                        <Nav variant="tabs" defaultActiveKey="link0">
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(0) }} eventKey="link0">버튼0</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(1) }} eventKey="link1">버튼1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={() => { setTab(2) }} eventKey="link2">버튼2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent tab={tab} fade={fade}></TabContent>
                    </div >
                    :
                    <div>없는 페이지임</div>
            }
        </>
    )
}

function TabContent(props) {

    if (props.tab === 0) {
        return <div className={"start " + props.fade}>내용0</div>
    }
    if (props.tab === 1) {
        return <div className={"start " + props.fade}>내용1</div>
    }
    if (props.tab === 2) {
        return <div className={"start " + props.fade}>내용2</div>
    }
}

export default Detail;