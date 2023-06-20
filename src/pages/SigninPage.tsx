import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../Firebase';

function SigninPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [isValid, setIsValid] = useState({ isEmail: true, isPassword: true });
  const navigate = useNavigate();

  async function onSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        firebaseAuth,
        form.email,
        form.password,
      );
      console.log(firebaseAuth);
      navigate('/account');
    } catch (err) {
      console.error(err);
    }
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
