import axios from 'axios';
import React, { ReactNode, useContext, useEffect, useReducer } from 'react';
import { users_url } from '../../../constants/Url/url';
import reducer from '../../reducers/UserReducer';
import {
  CHECK_LOGIN_USER_BEGIN,
  CHECK_LOGIN_USER_ERROR,
  CHECK_LOGIN_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGOUT_USER_SUCCESS
} from '../../../constants/ReducerActions/userActions';
import toast from 'react-hot-toast';
import { Filter } from 'aws-sdk/clients/devicefarm';
import { useCartContext } from '../cart-context/cart-context';

const UserContext = React.createContext<UserState | null>(null);

type UserContextProviderProps = {
  children: ReactNode;
};

export type User = {
  id: string;
  fullname: string;
};

// type FetchCategoryProducts = (category: string) => void;

export type LoginUserType = (email: string, password: string) => void;

type LogoutUserType = () => void;

export type SignupUserType = (
  fullname: string,
  email: string,
  password: string
) => void;

export type UserState = {
  user: User | null;
  user_login_loading: boolean;
  user_login_error: boolean;
  is_logged_in: boolean;
  LoginUser: LoginUserType;
  SignupUser: SignupUserType;
  LogoutUser: LogoutUserType;
};

const initialState: UserState = {
  user: null,
  user_login_loading: false,
  user_login_error: false,
  is_logged_in: false,
  LoginUser: () => {},
  SignupUser: () => {},
  LogoutUser: () => {}
};

export function useUserContext() {
  const UserCtx = useContext(UserContext);
  return UserCtx;
}

export const UserProvider = ({ children }: UserContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const LoginUser: LoginUserType = async (email: string, password: string) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post(
        `${users_url}/login`,
        {
          email,
          password
        },
        { withCredentials: true }
      );
      checkLoginOnStartApp();
      return true;
    } catch (error: any) {
      toast.error(error.response.data.message);
      dispatch({ type: LOGIN_USER_ERROR });
      return false;
    }
  };

  const SignupUser: SignupUserType = async (
    fullname: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await axios.post(
        `${users_url}/sign-up`,
        {
          fullname,
          email,
          password
        },
        {
          withCredentials: true
        }
      );
      return true;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return false;
    }
  };

  const LogoutUser: LogoutUserType = async () => {
    try {
      const response = await axios.post(`${users_url}/logout`, null, {
        withCredentials: true
      });
      dispatch({ type: LOGOUT_USER_SUCCESS });
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const checkLoginOnStartApp = async () => {
    try {
      const response = await axios.get(`${users_url}/check-auth`, {
        withCredentials: true
      });
      if (response.data.message === 'Authorized') {
        const userData: User = {
          id: response.data.user_data.userId,
          fullname: response.data.user_data.fullname
        };
        dispatch({ type: CHECK_LOGIN_USER_SUCCESS, payload: { userData } });
      } else {
        dispatch({ type: CHECK_LOGIN_USER_ERROR });
      }
    } catch (error) {
      dispatch({ type: CHECK_LOGIN_USER_ERROR });
    }
  };

  useEffect(() => {
    checkLoginOnStartApp();
  }, []);

  return (
    <UserContext.Provider
      value={{ ...state, LoginUser, SignupUser, LogoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
