import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [name, setname] = useState(["남자 코트 추천", "강남 우동 맛집", "고라니.."]);
    const [good, setgood] = useState([0, 0, 0]);
    const [modal, setmodal] = useState(false);
    const [title, settitle] = useState(0);
    const [add, setadd] = useState("");
    const [date, setdate] = useState(["2/17", "2/17", "2/17"]);

    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDay();

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
                        <p>
                            <b>{date[i] + " 발행"}</b>
                        </p>
                        <button
                            onClick={() => {
                                let copy = [...name];
                                copy.splice(i, 1);
                                setname(copy);

                                let copy2 = [...good];
                                copy2.splice(i, 1);
                                setgood(copy2);

                                let copy3 = [...date];
                                copy3.splice(i, 1);
                                setdate(copy3);
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
            <input
                type="text"
                onChange={(e) => {
                    e.preventDefault();
                    console.log(e.target.value);
                    setadd(e.target.value);
                }}
            ></input>
            <button
                onClick={(e) => {
                    if (add.length > 0) {
                        let copy = [...name];
                        copy[copy.length] = add;
                        setname(copy);

                        let copy2 = [...good];
                        copy2[copy2.length] = 0;
                        setgood(copy2);

                        let copy3 = [...date];
                        copy3[copy3.length] = month + "/" + day;
                        setdate(copy3);

                        console.log(month);
                    }
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
