import { todoListState } from '../recoil'
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';

function TodoItemCreator() {

    const [inputValue, setInputValue] = useState('');
    //아이템 추가할때 이용, todoListState에 useSetRecoilState이용하여 inputValue 추가
    const setTodoList = useSetRecoilState(todoListState);

    //아이템 추가
    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({ target: { value } }) => {
        setInputValue(value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
}

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}

export { TodoItemCreator }