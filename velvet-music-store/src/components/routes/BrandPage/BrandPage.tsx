import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BrandsContentList } from '../../../constants/DataObjects/DataObjects';
import { BrandsContentInterace } from '../../../constants/DataObjects/Interfaces';

const BrandPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem;
  gap: 3rem;
`;

const BrandTitle = styled.h1``;

const BrandImage = styled.img`
  width: 20rem;
`;

const BrandContent = styled.p`
  overflow-wrap: break-word;
  width: 60rem;
  font-size: 1.5rem;

  @media only screen and (max-width: 1136px) {
    width: 40rem;
  }

  @media only screen and (max-width: 740px) {
    width: 30rem;
  }

  @media only screen and (max-width: 530px) {
    width: 20rem;
  }

  @media only screen and (max-width: 400px) {
    width: 15rem;
    font-size: 1.3rem;
  }
`;

const BrandPage = () => {
  const { brandName } = useParams();
  const [selectedBrand, setSelectedBrand] = useState<BrandsContentInterace>();

  useEffect(() => {
    const getBrandObject = () => {
      return BrandsContentList.find((brand) => brand.title === brandName);
    };

    setSelectedBrand(getBrandObject());
  }, [brandName]);

  return (
    <BrandPageContainer>
      <BrandImage src={`/brands-images/${selectedBrand?.image}`} />
      <BrandContent>{selectedBrand?.content}</BrandContent>
    </BrandPageContainer>
  );
};

export default BrandPage;
