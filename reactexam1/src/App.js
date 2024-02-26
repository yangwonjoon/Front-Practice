import './App.css';
import Viewer from './component/viewer';
import Controller from './component/controller';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  const clickHandler = (num) => {
    setCount(count + num)
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller clickHandler={clickHandler} />
      </section>
    </div>
  );
}

export default App;
