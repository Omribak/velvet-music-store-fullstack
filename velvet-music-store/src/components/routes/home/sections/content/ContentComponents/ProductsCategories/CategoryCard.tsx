import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useProductsContext } from '../../../../../../contexts/products-context/products-context';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  categoryName: string;
  categoryImage: string;
  categoryLink: string;
  categoryProp: string;
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

  @media only screen and (max-width: 700px) {
    width: 34rem;
  }

  @media only screen and (max-width: 600px) {
    width: 32rem;
  }

  @media only screen and (max-width: 540px) {
    width: 28rem;
    height: 20rem;
  }

  @media only screen and (max-width: 470px) {
    width: 20rem;
  }
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

  @media only screen and (max-width: 700px) {
    width: 88.2%;
  }

  @media only screen and (max-width: 600px) {
    width: 87.5%;
  }

  @media only screen and (max-width: 540px) {
    width: 85.8%;
  }

  @media only screen and (max-width: 470px) {
    width: 80%;
  }
`;

const CategoryCard = ({
  categoryName,
  categoryImage,
  categoryLink,
  categoryProp
}: CategoryCardProps) => {
  const navigate = useNavigate();
  const ProductsCtx = useProductsContext();

  // const handleClickedLink = () => {
  //   navigate(`/${categoryLink}`, { state: { categoryProp } });
  // };
  return (
    <CategoryCardContainer>
      <CategoryImage src={`homepage-categories/${categoryImage}`} />
      <CategoryTitleName href={`/${categoryLink}`}>
        {categoryName}
      </CategoryTitleName>
    </CategoryCardContainer>
  );
};

export default CategoryCard;
