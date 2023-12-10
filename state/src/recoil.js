import { atom, selector } from 'recoil';

const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'HELLO', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const text = get(textState);

        return text.length;
    },
});


const todoListState = atom({
    key: 'todoListState',
    default: [],
});

export { charCountState, textState }

