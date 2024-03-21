import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useCartContext } from '../../contexts/cart-context/cart-context';
import { useUserContext } from '../../contexts/user-context/user-context';

const SuccessCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  align-items: center;
`;

const Title = styled.h1``;

const Description = styled.p``;

const SuccessCheckout = () => {
  const CartCtx = useCartContext();
  const UserCtx = useUserContext();

  useEffect(() => {
    if (UserCtx?.user?.id) {
      CartCtx?.ClearCart(UserCtx?.user?.id);
    }
  }, [CartCtx, UserCtx?.user?.id]);

  return (
    <SuccessCheckoutContainer>
      <Title>Purchase Success.</Title>
      <Description>
        You can view more products on the website to purchase more great items!
      </Description>
    </SuccessCheckoutContainer>
  );
};

export default SuccessCheckout;
