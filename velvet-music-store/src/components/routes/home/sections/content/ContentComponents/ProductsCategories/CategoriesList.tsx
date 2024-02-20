import React from 'react';
import styled from 'styled-components';
import { CategoriesListHome } from '../../../../../../../constants/DataObjects/DataObjects';
import CategoryCard from './CategoryCard';

const CategoriesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const CategoriesList = () => {
  return (
    <CategoriesListContainer>
      {CategoriesListHome.map((category) => (
        <CategoryCard
          categoryName={category.name}
          categoryImage={category.image}
          categoryLink={category.link}
        />
      ))}
    </CategoriesListContainer>
  );
};

export default CategoriesList;
