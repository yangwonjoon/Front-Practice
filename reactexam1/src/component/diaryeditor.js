import { useRef, useState } from "react"

export const DiaryEditor = () => {

    const authorRef = useRef();
    const contentRef = useRef();

    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: 1
    })

    const handlechangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(state)
    }

    const handlesubmit = (e) => {

        if (state.author.length < 1) {
            authorRef.current.focus();
            return;
        }
        if (state.content.length < 6) {
            contentRef.current.focus();
            return;
        }

        alert(state)
        setState({
            ...state,
            author: '',
            content: '',
            emotion: 1
        })
    }

    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>

            <div>
                <input ref={authorRef} name="author" value={state.author} onChange={handlechangeState}></input>
            </div>

            <div>
                <textarea ref={contentRef} name="content" value={state.content} onChange={handlechangeState}></textarea>
            </div>

            <div>
                <span>오늘의 감정점수 : </span>
                <select name="emotion" value={state.emotion} onChange={handlechangeState}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>

            <button onClick={handlesubmit}>저장하기</button>
        </div>
    )
}
