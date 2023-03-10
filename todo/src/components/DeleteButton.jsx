import React from 'react';

export const DeleteButton = ({dispatch}) => {

    const deleteHandlerButton = () => {
        const delList = prompt(`몇시를 삭제하고 싶나요? (숫자만 입력해주세요)`);
        dispatch({type: 'DELETE', delList})
    }
    return(
        <div>
            <button onClick={deleteHandlerButton}>삭제</button>
        </div>
    );
};