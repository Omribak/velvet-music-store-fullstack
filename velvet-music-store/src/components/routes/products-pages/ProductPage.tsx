import React from 'react';
import styled from 'styled-components';
import FilterSection from './ProductPageComponents/FilterSection';
import DisplayProducts from './ProductPageComponents/DisplayProducts';

const ProductPageContainer = styled.div`
  display: flex;
  padding: 2rem 10rem;
`;

const ProductPage = () => {
  return (
    <ProductPageContainer>
      <FilterSection />
      <DisplayProducts />
    </ProductPageContainer>
  );
};

export default ProductPage;
