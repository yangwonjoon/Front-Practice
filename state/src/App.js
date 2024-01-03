import './App.css';

import { todoListState } from './recoil';
import { TodoItemCreator } from './component/TodoItemCreator';
import { TodoItem } from './component/TodoItem'
import { useRecoilValue } from 'recoil';



function App() {

  const todoList = useRecoilValue(todoListState);

  return (
    <>


    </>
  );
}

export default App;
