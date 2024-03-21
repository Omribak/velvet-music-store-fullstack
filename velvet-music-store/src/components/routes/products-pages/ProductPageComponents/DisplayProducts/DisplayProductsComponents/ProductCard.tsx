import React from 'react';
import { Product } from '../../../../../contexts/products-context/products-context';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface ProductCardProp {
  product: Product;
}

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  gap: 1rem;
  transition: transform 1100ms ease-in-out;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  @media only screen and (max-width: 510px) {
    width: 12rem;
  }

  @media only screen and (max-width: 450px) {
    width: 8rem;
  }
`;

const ProductImage = styled.img`
  @media only screen and (max-width: 510px) {
    width: 12rem;
  }
`;

const ProductName = styled.p`
  overflow-wrap: break-word;
  width: 10rem;
`;
const ProductPrice = styled.h1`
  font-size: 1rem;
`;

const ViewProductButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const ViewProductLink = styled.a`
  all: unset;
  color: white;
`;

const ProductCard = ({ product }: ProductCardProp) => {
  const navigate = useNavigate();
  const moveToSingleProductPage = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <ProductCardContainer>
      <ProductImage src={`/products-images/${product.image}`} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}$</ProductPrice>
      <ViewProductButton>
        {/* VIEW PRODUCT */}
        <ViewProductLink href={`/product/${product._id}`}>
          VIEW PRODUCT
        </ViewProductLink>
      </ViewProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
