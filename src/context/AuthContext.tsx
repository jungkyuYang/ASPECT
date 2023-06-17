import React, { createContext, useReducer, useContext, Dispatch } from 'react';

interface IState {
  id: number;
  text: string;
}

const AuthStateContext = createContext<'hi' | null>(null);

function AuthContext({ children }: { children: React.ReactNode }) {
  return (
    <AuthStateContext.Provider value="hi">{children}</AuthStateContext.Provider>
  );
}

export default AuthContext;
