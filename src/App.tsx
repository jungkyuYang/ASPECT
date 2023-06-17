import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';
import AuthContext from './context/AuthContext';

const ROUTES = {
  MAIN: '/app',
  SIGNUP: '/signup',
  SIGNIN: '/signin',
};

function App() {
  return (
    <AuthContext>
      <Routes>
        <Route path={ROUTES.MAIN} element={<Layout />}>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
        </Route>
        <Route path={ROUTES.SIGNIN} element={<SigninPage />} />
        <Route path={ROUTES.SIGNUP} element={<SignupPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthContext>
  );
}

export default App;
