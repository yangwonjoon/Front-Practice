import { Routes, Route, useNavigate } from 'react-router-dom'
// import { useEffect } from 'react';
import './App.css';

import { Intro } from './pages/intro';
import { Main } from './pages/main'
import { Logo } from './component/logo';

function App() {

  // const navigate = useNavigate()

  // useEffect(() => {
  //   document.body.className = 'bg-main';
  // }, []);

  return (
    <>
      <div className='w-screen h-screen bg-main relative'>
        <Logo></Logo>
        <Routes>
          <Route path="/" element={<Intro></Intro>} />
          <Route path="/main" element={<Main></Main>} />
        </Routes>
      </div >
    </>
  );
}

export default App;
