import { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Focus me on button click" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App
