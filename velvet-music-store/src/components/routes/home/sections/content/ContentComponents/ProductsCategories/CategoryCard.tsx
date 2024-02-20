import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface CategoryCardProps {
  categoryName: string;
  categoryImage: string;
  categoryLink: string;
}

const CategoryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    img {
      /* transform: translateZ(20); */
    }
  }
`;

const CategoryImage = styled.img`
  width: 40rem;
  height: 30rem;
  transition: transform 700ms ease-in-out;
`;

const CategoryTitleName = styled.a`
  background-color: rgb(190, 0, 0);
  color: white;
  padding: 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  width: 90%;
  text-align: center;
  cursor: pointer;
`;

const CategoryCard = ({
  categoryName,
  categoryImage,
  categoryLink
}: CategoryCardProps) => {
  const navigate = useNavigate();

  const handleClickedLink = () => {
    navigate(categoryLink);
  };
  return (
    <CategoryCardContainer>
      <CategoryImage src={`homepage-categories/${categoryImage}`} />
      <CategoryTitleName onClick={handleClickedLink}>
        {categoryName}
      </CategoryTitleName>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
