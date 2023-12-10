import logo from './logo.svg';
import './App.css';

import { textState, charCountState } from './recoil';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { useState } from 'react';


function App() {


  return (
    <div className="App">
      <div>
        <TextInput />
        <CharacterCount></CharacterCount>
      </div>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default App;
