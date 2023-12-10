import logo from './logo.svg';
import './App.css';

import { todoListState } from './recoil';
import { TodoItemCreator } from './component/TodoItemCreator';
import { TodoItem } from './component/TodoItem'
import { atom, useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { useState } from 'react';


function App() {

  const todoList = useRecoilValue(todoListState);

  return (
    <>
      {/* <TodoListStats /> */}
      {/* <TodoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
