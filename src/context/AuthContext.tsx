import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { firebaseAuth } from '../Firebase';

type Action =
  | { type: 'auth/createUser'; email: string; password: string }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'TOGGLE_GOOD' };

type TDispatch = Dispatch<Action>;
interface IState {
  email: string | null;
  password: string | null;
}

interface IReducer {
  (state: IState, action: Action): IState;
}

const AuthStateContext = createContext<IState | any[] | null>(null);
const AuthDispatchConext = createContext<TDispatch | null>(null);

const reducer: IReducer = (state, action) => {
  switch (action.type) {
    case 'auth/createUser':
      return { ...state, email: action.email, password: action.password };
    case 'SET_TEXT':
      return { ...state, text: action.text };
    default:
      throw new Error('unhandled action');
  }
};

function AuthContext({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    email: '',
    password: '',
  });
  const [user, setUser] = useState<any>({});

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const value = useMemo(() => [state, user], [state, user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthStateContext.Provider value={value}>
      <AuthDispatchConext.Provider value={dispatch}>
        {children}
      </AuthDispatchConext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthState() {
  const state = useContext(AuthStateContext);
  if (!state) {
    throw new Error('Cannot find AuthContext');
  }
  return state;
}

export function useAuthDispatch() {
  const dispatch = useContext(AuthDispatchConext);
  if (!dispatch) {
    throw new Error('Cannot find AuthDispatch');
  }
  return dispatch;
}

export default AuthContext;
