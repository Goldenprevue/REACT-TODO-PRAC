import React from 'react';

export const DeleteButton = (props) => {
    const {todo, setTodo} = props;

    const deleteHandlerButton = () => {
        const delList = prompt(`몇시를 삭제하고 싶나요? (숫자만 입력해주세요)`);
        setTodo(todo.filter((l)=> l.time !== delList ? alert('sdf'): l ))
    }
    return(
        <div>
            <button onClick={deleteHandlerButton}>삭제</button>
        </div>
    );
};