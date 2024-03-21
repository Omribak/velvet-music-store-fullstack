import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../../contexts/user-context/user-context';
import CartNotLogged from './CartNotLogged';
import DisplayCartItems from './CartPageComponents/DisplayCartItems';
import CheckoutCart from './CartPageComponents/CheckoutCart';
import { useCartContext } from '../../contexts/cart-context/cart-context';
import EmptyCart from './EmptyCart';

const CartPageContainer = styled.div`
  display: flex;
  padding: 3rem;
  gap: 2rem;
  /* 
  @media only screen and (max-width: 1850px) {
    flex-direction: column;
  } */

  @media only screen and (max-width: 1500px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;

const CartPage = () => {
  const UserCtx = useUserContext();
  const CartCtx = useCartContext();

  if (!UserCtx?.is_logged_in) {
    return <CartNotLogged />;
  }

  if (CartCtx?.num_products === 0) {
    return <EmptyCart />;
  }

  return (
    <CartPageContainer>
      <DisplayCartItems />
      <CheckoutCart />
    </CartPageContainer>
  );
};

export default CartPage;
