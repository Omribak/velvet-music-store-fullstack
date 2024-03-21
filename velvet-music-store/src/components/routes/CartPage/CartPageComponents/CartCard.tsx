import React, { useState } from 'react';
import {
  CartProduct,
  useCartContext
} from '../../../contexts/cart-context/cart-context';
import styled from 'styled-components';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useUserContext } from '../../../contexts/user-context/user-context';

type CartItemProps = {
  cartItem: CartProduct;
};

const CartCardContainer = styled.div``;

export const HR = styled.hr`
  width: 60rem;

  @media only screen and (max-width: 1100px) {
    width: 40rem;
  }

  @media only screen and (max-width: 720px) {
    width: 30rem;
  }

  @media only screen and (max-width: 570px) {
    width: 20rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const CartProductImage = styled.img`
  width: 10rem;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
`;

const ProductNumber = styled.p``;

const ProductCondition = styled.p``;

const CartTitle = styled.h3``;

const ProductBrand = styled.p``;

const NumProductsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductPrice = styled.h3`
  text-align: center;
`;

const NumOfProducts = styled.div`
  display: flex;
  gap: 1rem;
`;

const NumIconButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const DisplayNum = styled.p`
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
`;

const RemoveItem = styled.button`
  all: unset;
  cursor: pointer;
`;

const CartCard = ({ cartItem }: CartItemProps) => {
  const [ItemNumProducts, setItemNumProducts] = useState(cartItem.quantity);
  const CartCtx = useCartContext();
  const UserCtx = useUserContext();

  const HandleRemoveItemButton = () => {
    if (UserCtx?.user?.id) {
      CartCtx?.RemoveItemFromCart(UserCtx?.user?.id, cartItem.product._id);
    }
  };

  const handleNumProductsButton = (sign: string) => {
    setItemNumProducts((prev) => {
      let updatedValue;
      if (sign === 'minus') {
        updatedValue = prev !== 0 ? prev - 1 : prev;
      } else {
        updatedValue = prev + 1;
      }

      if (updatedValue === 0) {
        if (UserCtx?.user?.id) {
          CartCtx?.RemoveItemFromCart(UserCtx?.user?.id, cartItem.product._id);
        }
      }

      // Update state directly with the new value
      if (UserCtx?.user?.id) {
        // Call ChangeAmount with the updated value
        CartCtx?.ChangeAmount(
          UserCtx?.user?.id,
          cartItem.product._id,
          updatedValue
        );
      }

      // Return the updated value
      return updatedValue;
    });
  };
  return (
    <CartCardContainer>
      <HR />
      <CardWrapper>
        <CartProductImage src={`products-images/${cartItem.product.image}`} />
        <DetailsWrapper>
          <CartTitle>{cartItem.product.name}</CartTitle>
          <ProductBrand>Company : {cartItem.product.brand}</ProductBrand>
          <ProductNumber>Item # {cartItem.product._id}</ProductNumber>
          <ProductCondition>
            Condition : {cartItem.product.sales}
          </ProductCondition>
        </DetailsWrapper>
        <NumProductsWrapper>
          <ProductPrice>{cartItem.product.price}$</ProductPrice>
          <NumOfProducts>
            <NumIconButton onClick={() => handleNumProductsButton('minus')}>
              <FiMinus />
            </NumIconButton>
            <DisplayNum>{ItemNumProducts}</DisplayNum>
            <NumIconButton onClick={() => handleNumProductsButton('plus')}>
              <FiPlus />
            </NumIconButton>
          </NumOfProducts>
          <RemoveItem onClick={HandleRemoveItemButton}>Remove</RemoveItem>
        </NumProductsWrapper>
      </CardWrapper>
    </CartCardContainer>
  );
};

export default CartCard;
