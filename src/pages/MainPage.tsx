import React, { createContext, useReducer } from 'react';

const initialState = [
  {
    id: 1,
    text: '프로젝트',
  },
];

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'addUser':
      console.log(state);
      return state;
    default:
      throw new Error(`정의되지 않은 액션 : ${action.type}`);
  }
}

function MainPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'addUser' });
        }}
      >
        555
      </button>
    </div>
  );
}

export default MainPage;
