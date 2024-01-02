import './App.css';

import { todoListState } from './recoil';
import { TodoItemCreator } from './component/TodoItemCreator';
import { TodoItem } from './component/TodoItem'
import { useRecoilValue } from 'recoil';



function App() {

  const todoList = useRecoilValue(todoListState);

  return (
    <>

      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
