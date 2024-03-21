import React from 'react';
import { useCartContext } from '../../../contexts/cart-context/cart-context';
import styled from 'styled-components';
import CartCard, { HR } from './CartCard';

const DisplayCartItemsContainer = styled.div`
  flex-grow: 0.2;
`;

const DisplayCartItems = () => {
  const CartCtx = useCartContext();
  return (
    <DisplayCartItemsContainer>
      {CartCtx?.cart_products.map((cartItem, index) => (
        <CartCard key={index} cartItem={cartItem} />
      ))}
      <HR />
    </DisplayCartItemsContainer>
  );
};

export default DisplayCartItems;
