import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [name, setname] = useState(["남자 코트 추천", "강남 우동 맛집", "고라니.."]);
    const [good, setgood] = useState([0, 1, 2]);
    const [modal, setmodal] = useState(false);
    const [title, settitle] = useState(0);
    const [add, setadd] = useState("");

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {name.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4
                            onClick={() => {
                                setmodal(true);
                                settitle(i);
                            }}
                        >
                            {name[i]}
                            <span
                                onClick={(e) => {
                                    const copy = [...good];
                                    copy[i] = copy[i] + 1;
                                    setgood(copy);
                                    e.stopPropagation();
                                }}
                            >
                                👍
                            </span>
                            {good[i]}
                        </h4>
                        <p>2월 17일 발행</p>
                        <button
                            onClick={() => {
                                let copy = [...name];
                                copy.splice(i, 1);
                                setname(copy);
                            }}
                        >
                            삭제
                        </button>
                    </div>
                );
            })}
            {/* <button
                onClick={function () {
                    const copy = [...name];
                    copy.sort();
                    setname(copy);
                }}
            >
                가나다순 정렬
            </button> */}
            <input type="text" onChange={(e) => setadd(e.target.value)}></input>
            <button
                onClick={() => {
                    let copy = [...name];
                    copy[copy.length] = add;
                    setname(copy);
                }}
            >
                버튼
            </button>

            {modal == true ? <Modal name={name} setname={setname} title={title}></Modal> : null}
        </div>
    );
}

function Modal(props) {
    return (
        <>
            <div className="modal">
                <h4>{props.name[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button
                    onClick={function () {
                        const copy = [...props.name];
                        copy[0] = "여자 코트 추천";
                        props.setname(copy);
                    }}
                >
                    여자 코트 버튼
                </button>
            </div>
        </>
    );
}

export default App;
