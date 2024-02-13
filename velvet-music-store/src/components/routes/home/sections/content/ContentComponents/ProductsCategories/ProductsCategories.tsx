import React from 'react';
import styled from 'styled-components';

const ProductsCategoriesContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
`;

const IntroductionText = styled.p`
  margin: 0 auto;
  overflow-wrap: break-word;
  width: 30rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const Line = styled.div`
  border: 1px solid red;
  background-color: rgb(255, 0, 0);
  opacity: 50%;
  height: 0.02rem;
  width: 20rem;
`;

const TitleText = styled.h1`
  margin: 0;
  color: red;
`;
const ProductsCategories = () => {
  return (
    <ProductsCategoriesContainer>
      <IntroductionText>
        Our store have the best products , with the lowest price , best customer
        service , top quality fine.We promise the products be delivered within
        14 days.
      </IntroductionText>
      <TitleWrapper>
        <Line />
        <TitleText>Velvet Rosa Products</TitleText>
        <Line />
      </TitleWrapper>
    </ProductsCategoriesContainer>
  );
};

export default ProductsCategories;
