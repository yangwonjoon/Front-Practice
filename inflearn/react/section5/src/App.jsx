import React, { useState, useLayoutEffect, useRef } from 'react';

function App() {
  const boxRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 100, height: 100 });

  useLayoutEffect(() => {
    const { width, height } = boxRef.current.getBoundingClientRect();
    console.log('useLayoutEffect:', width, height);
    // 무한 루프를 방지하기 위해 조건문 추가
    if (boxSize.width !== width || boxSize.height !== height) {
      setBoxSize({ width, height });
    }
  }, [boxSize]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: `${boxSize.width}px`,
          height: `${boxSize.height}px`,
          backgroundColor: 'lightblue',
          transition: 'width 0.5s, height 0.5s',
        }}
      ></div>
      <button onClick={() => setBoxSize({ width: boxSize.width + 50, height: boxSize.height + 50 })}>
        Increase Size
      </button>
    </div>
  );
}

export default App;