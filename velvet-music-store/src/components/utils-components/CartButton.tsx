import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCartContext } from '../contexts/cart-context/cart-context';
import { useProductsContext } from '../contexts/products-context/products-context';

const CartWrapper = styled.div`
  position: relative;
`;

const CartButtonDisplay = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const ProductsCart = styled.p`
  position: absolute;
  border: 1px solid rgb(20, 19, 19, 0.6);
  padding: 0.4rem;
  width: 1rem;
  text-align: center;
  top: -70%;
  right: -36%;
  background-color: white;
  color: black;
  border-radius: 3rem;
`;

const CartButton = () => {
  const navigate = useNavigate();
  const CartCtx = useCartContext();
  const ProductsCtx = useProductsContext();

  const MoveToCartPage = () => {
    if (ProductsCtx?.sidenav_toggle) {
      ProductsCtx.ToggleSideNav();
    }
    navigate('/cart');
  };

  return (
    <CartWrapper>
      <CartButtonDisplay onClick={MoveToCartPage}>CART</CartButtonDisplay>
      <ProductsCart>{CartCtx?.num_products}</ProductsCart>
    </CartWrapper>
  );
};

export default CartButton;
