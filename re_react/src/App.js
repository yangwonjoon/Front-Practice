
import './App.css';
import { useState } from 'react'

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [add, setAdd] = useState('')

    console.log(글제목, 따봉)

    var today = new Date();

    var hours = ('0' + today.getHours()).slice(-2);
    var minutes = ('0' + today.getMinutes()).slice(-2);
    var seconds = ('0' + today.getSeconds()).slice(-2);

    var timeString = hours + ':' + minutes + ':' + seconds;

    return (

        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            {
                글제목.map(function (a, i) {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={(e) => { setModal(!modal) }}>{a}

                                <span onClick={(e) => {
                                    e.stopPropagation();
                                    let copy = [...따봉];
                                    copy[i] += 1
                                    따봉변경(copy);
                                }}>👍</span>{따봉[i]}</h4>

                            <button onClick={() => {
                                let copy = [...글제목];
                                let starcopy = [...따봉];
                                copy.splice(i, 1);
                                starcopy.splice(i, 1)
                                글제목변경(copy);
                                따봉변경(starcopy)
                            }}>삭제</button>
                        </div>)
                })
            }
            <input onChange={(e) => { setAdd(e.target.value); console.log(add) }}></input>
            <button onClick={() => {
                let copy = [...글제목];
                let starcopy = [...따봉];
                if (add.length > 0) {
                    글제목변경([add, ...copy])
                    따봉변경([0, ...starcopy])
                }
            }}>추가</button>

            {
                modal == true ? <Modal 글제목={글제목} 글제목변경={글제목변경} ></Modal> : null
            }

        </div >

    )
}

function Modal({ 글제목, 글제목변경 }) {
    return (
        <div className="modal">
            <h4>{글제목[0]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let copy = [...글제목];
                copy[0] = '여자 코트 추천'
                글제목변경(copy)
            }}>여자 코트 추천</button>
        </div>
    )
}

export default App;
