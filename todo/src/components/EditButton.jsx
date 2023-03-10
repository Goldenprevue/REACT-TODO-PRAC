import React from 'react';

export const EditButton = ({dispatch}) => {
    const editHandlerButton = () => {
        const editList = prompt(`몇시를 수정하고 싶나요? (숫자만 입력해주세요)`);
        const current = prompt(`수정하고싶은 일을 적어주세요`);
        dispatch({type: 'UPDATE', editList, current})
        
    };
    return(
        <div>
            <button onClick={editHandlerButton}>수정하기</button>
        </div>
    );
};