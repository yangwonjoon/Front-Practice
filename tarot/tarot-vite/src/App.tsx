import React, { useState } from 'react';
import './App.css';

import { Intro } from './pages/intro';
import { Main } from './pages/main'
import { Logo } from './component/logo';


function App() {

  return (<>
    <div className='w-screen h-screen bg-main relative'>
      <Logo></Logo>

      <Intro></Intro>
      {/* <Main></Main> */}
    </div>
  </>
  );
}

export default App;
