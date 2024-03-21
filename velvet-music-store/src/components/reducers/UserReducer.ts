import {
  CHECK_LOGIN_USER_ERROR,
  CHECK_LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS
} from '../../constants/ReducerActions/userActions';
import { Product } from '../contexts/products-context/products-context';
import { User, UserState } from '../contexts/user-context/user-context';

type LoginUserBeginAction = {
  type: 'LOGIN_USER_BEGIN';
};

type LoginUserSuccessAction = {
  type: 'LOGIN_USER_SUCCESS';
};

type LoginUserErrorAction = {
  type: 'LOGIN_USER_ERROR';
};

type CheckLoginUserBeginAction = {
  type: 'CHECK_LOGIN_USER_BEGIN';
};

type CheckLoginUserSuccessAction = {
  type: 'CHECK_LOGIN_USER_SUCCESS';
  payload: {
    userData: User;
  };
};

type CheckLoginUserErrorAction = {
  type: 'CHECK_LOGIN_USER_ERROR';
};

type LogoutUserSuccess = {
  type: 'LOGOUT_USER_SUCCESS';
};

type Actions =
  | LoginUserBeginAction
  | LoginUserSuccessAction
  | LoginUserErrorAction
  | CheckLoginUserBeginAction
  | CheckLoginUserSuccessAction
  | CheckLoginUserErrorAction
  | LogoutUserSuccess;

export default function UserReducer(
  state: UserState,
  action: Actions
): UserState {
  if (action.type === CHECK_LOGIN_USER_SUCCESS) {
    return { ...state, is_logged_in: true, user: action.payload.userData };
  }
  if (action.type === CHECK_LOGIN_USER_ERROR) {
    return { ...state, is_logged_in: false };
  }

  if (action.type === LOGOUT_USER_SUCCESS) {
    return { ...state, is_logged_in: false, user: null };
  }
  // if (action.type === GET_PRODUCTS_BEGIN) {
  //   return { ...state, products_loading: true };
  // }
  // if (action.type === GET_ALL_PRODUCTS_SUCCESS) {
  //   return {
  //     ...state,
  //     products_loading: false,
  //     products: action.payload.products,
  //     num_products: action.payload.num_products
  //   };
  // }
  // if (action.type === GET_PRODUCTS_ERROR) {
  //   return { ...state, products_error: true, products_loading: false };
  // }

  return state;
}
