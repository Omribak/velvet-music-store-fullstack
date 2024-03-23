import React from 'react';
import styled from 'styled-components';
import {
  Line,
  TitleText,
  TitleWrapper
} from './ProductsCategories/ProductsCategories';
import { WhyUsOptions } from '../../../../../../constants/DataObjects/DataObjects';

const WhyUsContainer = styled.div``;

const WhyUsOptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  margin-left: 8rem;
  padding: 2rem;

  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    gap: 0rem;
  }

  @media only screen and (max-width: 420px) {
    gap: 1rem;
  }
`;

const WhyUsOptionCard = styled.div`
  height: 20rem;

  @media only screen and (max-width: 420px) {
    text-align: center;
  }
`;

const OptionTitle = styled.h1`
  font-size: 1.6rem;
  overflow-wrap: break-word;
  width: 20rem;
  color: #be0000;

  @media only screen and (max-width: 1300px) {
    width: 15rem;
    text-align: center;
  }

  @media only screen and (max-width: 420px) {
    font-size: 1.2rem;
    width: 12rem;
    text-align: center;
  }
`;

const OptionDescription = styled.p`
  overflow-wrap: break-word;
  width: 15rem;

  @media only screen and (max-width: 1300px) {
    text-align: center;
  }

  @media only screen and (max-width: 420px) {
    width: 12rem;
    text-align: center;
  }
`;

const OptionIcon = styled.div`
  font-size: 1.3rem;
  border: 1px solid #be0000;
  display: inline-block;
  border-radius: 0.3rem;
  padding: 0.7rem;
  margin-left: 4rem;

  @media only screen and (max-width: 1300px) {
    padding: 1.5rem;
    margin-left: 5rem;
  }

  @media only screen and (max-width: 420px) {
    margin: 0;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  color: rgb(190, 0, 0);
  margin: 0;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;

const WhyUs = () => {
  return (
    <WhyUsContainer>
      <TitleWrapper>
        <Line />
        <Title>WHY US ?</Title>
        <Line />
      </TitleWrapper>
      <WhyUsOptionWrapper>
        {WhyUsOptions.map((option, index) => (
          <WhyUsOptionCard key={index}>
            <OptionIcon>{option.icon({ color: '#be0000' })}</OptionIcon>
            <OptionTitle>{option.title}</OptionTitle>
            <OptionDescription>{option.description}</OptionDescription>
          </WhyUsOptionCard>
        ))}
      </WhyUsOptionWrapper>
    </WhyUsContainer>
  );
};

export default WhyUs;
