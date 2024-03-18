import './App.css';
import { useEffect, useState } from 'react';

import { DiaryEditor } from './component/diaryeditor';

function App() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(count + 1)
  }, [])

  return (
    <>{count}</>
  )
}


export default App;
