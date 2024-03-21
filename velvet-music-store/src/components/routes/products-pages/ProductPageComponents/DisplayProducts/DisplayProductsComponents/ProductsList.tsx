import React from 'react';
import styled from 'styled-components';
import {
  Product,
  useProductsContext
} from '../../../../../contexts/products-context/products-context';
import ProductCard from './ProductCard';

const ProductsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(182, 182, 182, 0.09);
  padding: 5rem;
  gap: 5rem;
`;

const NoItemsContainer = styled(ProductsListContainer)`
  padding: 15rem;
`;

const NoItemsDisplay = styled.p`
  font-size: 1.5rem;
`;

type ProductsListProp = {
  products: Product[];
};

const ProductsList = ({ products }: ProductsListProp) => {
  if (products.length === 0) {
    return (
      <NoItemsContainer>
        <NoItemsDisplay>
          Didnt find any product...Please search again.
        </NoItemsDisplay>
      </NoItemsContainer>
    );
  }
  return (
    <ProductsListContainer>
      {products.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </ProductsListContainer>
  );
};

export default ProductsList;
