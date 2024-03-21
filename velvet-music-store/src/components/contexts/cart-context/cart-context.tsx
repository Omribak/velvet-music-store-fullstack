import axios from 'axios';
import React, { ReactNode, useContext, useEffect, useReducer } from 'react';
import {
  cart_url,
  checkout_url,
  products_url
} from '../../../constants/Url/url';
import reducer from '../../reducers/CartReducer';
import { Product } from '../products-context/products-context';
import {
  ADD_PRODUCT_TO_CART_SUCCESS,
  CLEAR_CART_SUCCESS,
  REMOVE_ITEM_SUCCESS,
  RESET_CART_SUCCESS,
  UPDATE_USER_CART
} from '../../../constants/ReducerActions/cartActions';
import { useUserContext } from '../user-context/user-context';
import toast from 'react-hot-toast';

const CartContext = React.createContext<CartState | null>(null);

type CartContextProviderProps = {
  children: ReactNode;
};

export type CartProduct = {
  product: Product;
  quantity: number;
};

// export type ApplyFiltersAndSortType = (options: {
//   filters?: { brands: string[]; sales: string[] };
//   sort?: string;
// }) => void;

type AddProductToCartType = (
  userId: string,
  productId: string,
  num_product: number
) => void;

type CheckoutType = (userId: string) => void;

type ClearCartType = (userId: string) => void;

type RemoveItemCartType = (userId: string, productId: string) => void;

type ResetCartType = () => void;

type ChangeAmountType = (
  userId: string,
  productId: string,
  quantity: number
) => void;

export type CartState = {
  cart_products: CartProduct[];
  subtotal: number;
  num_products: number;
  AddProductToCart: AddProductToCartType;
  CheckoutStripeItems: CheckoutType;
  ClearCart: ClearCartType;
  RemoveItemFromCart: RemoveItemCartType;
  ChangeAmount: ChangeAmountType;
  ResetCart: ResetCartType;
};

const initialState: CartState = {
  cart_products: [],
  subtotal: 0,
  num_products: 0,
  AddProductToCart: () => {},
  CheckoutStripeItems: () => {},
  ClearCart: () => {},
  RemoveItemFromCart: () => {},
  ChangeAmount: () => {},
  ResetCart: () => {}
};

export function useCartContext() {
  const CartCtx = useContext(CartContext);
  return CartCtx;
}

export const CartProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const UserCtx = useUserContext();

  const AddProductToCart = async (
    userId: string,
    productId: string,
    num_product: number
  ) => {
    await axios.post(`${cart_url}/add-cart-item`, {
      userId,
      productId,
      quantityProducts: num_product
    });
    await UpdateCart(userId);
    toast.success('Product added to cart.');
    // dispatch({
    //   type: ADD_PRODUCT_TO_CART_SUCCESS,
    //   payload: { userId, productId, num_product }
    // });
  };

  const UpdateCart = async (userId: string) => {
    try {
      const response = await axios.get(`${cart_url}/get-cart/${userId}`);
      console.log(response.data.UserCart);
      dispatch({
        type: UPDATE_USER_CART,
        payload: {
          cart_products: response.data.UserCart,
          subtotal: response.data.subtotal,
          num_products: response.data.num_products
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const CheckoutStripeItems = async (userId: string) => {
    try {
      const response = await axios.post(checkout_url, {
        userId
      });
      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  };

  const ClearCart = async (userId: string) => {
    try {
      await axios.post(`${cart_url}/clear-cart`, {
        userId
      });
      dispatch({ type: CLEAR_CART_SUCCESS });
    } catch (error) {
      console.log(error);
    }
  };

  const RemoveItemFromCart = async (userId: string, productId: string) => {
    try {
      const response = await axios.post(`${cart_url}/remove-item`, {
        userId,
        productId
      });
      dispatch({
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          cart_products: response.data.NewCart,
          subtotal: response.data.subtotal,
          num_products: response.data.num_products
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const ChangeAmount = async (
    userId: string,
    productId: string,
    quantity: number
  ) => {
    try {
      await axios.post(`${cart_url}/change-amount`, {
        userId,
        productId,
        quantity
      });
      UpdateCart(userId);
    } catch (error) {
      console.log(error);
    }
  };

  const ResetCart = () => {
    console.log('RESET CART');
    dispatch({ type: RESET_CART_SUCCESS });
  };

  useEffect(() => {
    console.log(UserCtx?.is_logged_in);
    if (UserCtx?.is_logged_in) {
      if (UserCtx.user?.id) {
        UpdateCart(UserCtx.user?.id);
      }
    }
  }, [UserCtx?.is_logged_in, UserCtx?.user?.id]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        AddProductToCart,
        CheckoutStripeItems,
        ClearCart,
        RemoveItemFromCart,
        ChangeAmount,
        ResetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
