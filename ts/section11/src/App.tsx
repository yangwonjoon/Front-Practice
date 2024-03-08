import { useState } from 'react';
import './App.css';
//

type Todos = {
  id: number;
  content: string
}

function App() {

  const [text, setText] = useState('')
  const [todos, setTodos] = useState<Todos[]>([])

  const onchangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    console.log(text)
  }

  const onclickBtn = () => { }

  return (
    <div className="App">
      <h1>todo list</h1>
      <input value={text} onChange={onchangeInput}></input>
      <button>추가하기</button>
    </div>
  );
}

export default App;
