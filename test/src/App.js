import './App.css';
import { useRef } from 'react';

function App() {

  let ref = useRef(0);

  console.log('hi')

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}

export default App;
