/*eslint-disable*/ //warning 무시

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    let [name, setname] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "고라니..",
    ]);
    let [good, setgood] = useState([0, 1, 2]);
    let [modal, setmodal] = useState(false);

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {name.map(function (a, i) {
                return (
                    <div className="list" key={i}>
                        <h4
                        // onClick={() => {
                        //     setmodal(true);
                        // }}
                        >
                            {name[i]}
                            <span
                                onClick={() => {
                                    let copy = [...good];
                                    copy[i] = copy[i] + 1;
                                    setgood(copy);
                                }}
                            >
                                👍
                            </span>
                            {good[i]}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                );
            })}

            <button
                onClick={function () {
                    let copy = [...name];
                    copy[0] = "여자 코트 추천";
                    setname(copy);
                }}
            >
                여자 코트 버튼
            </button>
            <button
                onClick={function () {
                    let copy = [...name];
                    copy.sort();
                    setname(copy);
                }}
            >
                가나다순 정렬
            </button>
            {modal == true ? <Modal></Modal> : null}
        </div>
    );
}

function Modal() {
    return (
        <>
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    );
}

export default App;
