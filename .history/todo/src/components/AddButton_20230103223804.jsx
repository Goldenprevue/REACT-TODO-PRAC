import React from 'react';

export const AddButton = (props) => {
    const {todo, setTodo} = props;
    const addHandlerButton = () => {
        
    };
    return(
        <div>
        <button onClick={addHandlerButton}>추가</button>
        </div>
    );
};