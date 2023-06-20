import React from 'react';

import { useAuthState, useAuthDispatch } from '../context/AuthContext';

function MainPage() {
  const state = useAuthState();
  const dispatch = useAuthDispatch();

  const setCount = () =>
    dispatch({ type: 'auth/createUser', email: 'hi', password: 'hi' }); // count 를 넣지 않으면 에러발생
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'bye' }); // text 를 넣지 않으면 에러 발생
  console.log('테스트', state);

  return (
    <div>
      <p>
        <code>count: </code>
      </p>
      <p>
        <code>text: </code>
      </p>
      <div>
        <button type="button" onClick={setCount}>
          SET_COUNT
        </button>
        <button type="button" onClick={setText}>
          SET_TEXT
        </button>
      </div>
    </div>
  );
}

export default MainPage;
