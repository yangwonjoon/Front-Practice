const Controller = ({ clickHandler }) => {


    return (
        <div>
            <button onClick={() => clickHandler(-1)}>-1</button>
            <button onClick={() => clickHandler(-10)}>-10</button>
            <button onClick={() => clickHandler(-100)}>-100</button>
            <button onClick={() => clickHandler(100)}>+100</button>
            <button onClick={() => clickHandler(10)}>+10</button>
            <button onClick={() => clickHandler(1)}>+1</button>
        </div>
    );
};
export default Controller;