import {
  ADD_PRODUCT_TO_CART_SUCCESS,
  CLEAR_CART_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  RESET_CART_SUCCESS,
  UPDATE_USER_CART
} from '../../constants/ReducerActions/cartActions';
import { CartProduct, CartState } from '../contexts/cart-context/cart-context';

type AddProductToCartSuccessAction = {
  type: 'ADD_PRODUCT_TO_CART_SUCCESS';
  payload: {
    userId: string;
    productId: string;
    num_product: number;
  };
};

type UpdateUserCartSuccess = {
  type: 'UPDATE_USER_CART';
  payload: {
    cart_products: CartProduct[];
    subtotal: number;
    num_products: number;
  };
};

type RemoveItemSuccessAction = {
  type: 'REMOVE_ITEM_SUCCESS';
  payload: {
    cart_products: CartProduct[];
    subtotal: number;
    num_products: number;
  };
};

type ClearCartSuccessAction = {
  type: 'CLEAR_CART_SUCCESS';
};

type ResetCartAction = {
  type: 'RESET_CART_SUCCESS';
};

type Action =
  | AddProductToCartSuccessAction
  | UpdateUserCartSuccess
  | ClearCartSuccessAction
  | RemoveItemSuccessAction
  | ResetCartAction;

export default function ProductsReducer(
  state: CartState,
  action: Action
): CartState {
  if (action.type === ADD_PRODUCT_TO_CART_SUCCESS) {
    return {
      ...state
      // cart_products: [...state.cart_products, action.payload]
    };
  }
  if (action.type === UPDATE_USER_CART) {
    return {
      ...state,
      cart_products: action.payload.cart_products,
      subtotal: action.payload.subtotal,
      num_products: action.payload.num_products
    };
  }

  if (action.type === CLEAR_CART_SUCCESS) {
    return {
      ...state,
      cart_products: [],
      subtotal: 0,
      num_products: 0
    };
  }

  if (action.type === REMOVE_ITEM_SUCCESS) {
    return {
      ...state,
      cart_products: action.payload.cart_products,
      subtotal: action.payload.subtotal,
      num_products: action.payload.num_products
    };
  }

  if (action.type === RESET_CART_SUCCESS) {
    return {
      ...state,
      cart_products: [],
      subtotal: 0,
      num_products: 0
    };
  }

  return state;
}
