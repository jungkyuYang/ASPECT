import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SigninPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState({ isEmail: true, isPassword: true });

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      return navigate('/app');
    }
    return undefined;
  }, [navigate]);

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        body: '테스트 중이무니다',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    console.log('hi');
  }

  function onChangeEmailHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, email: e.target.value });
  }

  function onChangePasswordHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, password: e.target.value });
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        id="email"
        value={form.email}
        onChange={onChangeEmailHandler}
        placeholder="이메일"
      />
      <input
        id="password"
        type="password"
        value={form.password}
        onChange={onChangePasswordHandler}
        placeholder="비밀번호"
      />
      <button type="submit" disabled={!isValid.isEmail || !isValid.isPassword}>
        로그인
      </button>
    </form>
  );
}

export default SigninPage;
