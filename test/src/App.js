import './App.css';

function App() {

  const test = () => {
    console.log('hi')
  }

  return (
    <div className="App">
      <button onClick={() => test}>테스트 버튼</button>
    </div>
  );
}

export default App;
