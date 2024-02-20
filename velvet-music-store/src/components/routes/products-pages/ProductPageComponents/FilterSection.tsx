import React from 'react';
import styled from 'styled-components';

const FilterSectionContainer = styled.div`
  flex-grow: 0.1;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const SalesAndDiscounts = styled.div``;

const FilterHeader = styled.h1`
  font-size: 1rem;
`;

const FilterText = styled.p``;

const Companies = styled.div``;

const Price = styled.div``;

const ClearFiltersButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
  width: 10rem;
`;

const FilterSection = () => {
  return (
    <FilterSectionContainer>
      <SalesAndDiscounts>
        <FilterHeader>Sales And Discounts</FilterHeader>
        <ul>
          <li>Brand New</li>
          <li>From exhibition</li>
        </ul>
      </SalesAndDiscounts>
      <Companies>
        <FilterHeader>Companies</FilterHeader>
        <ul>
          <li>Fender</li>
          <li>Gibson</li>
          <li>Yamaha</li>
          <li>PRS</li>
          <li>Jackson</li>
        </ul>
      </Companies>
      <Price>
        <FilterHeader>Price</FilterHeader>
        <FilterText> 2,058$</FilterText>
        <input type="range" />
      </Price>
      <ClearFiltersButton>Clear Filters</ClearFiltersButton>
    </FilterSectionContainer>
  );
};

export default FilterSection;
