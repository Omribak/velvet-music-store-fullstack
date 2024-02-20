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
`;

const WhyUsOptionCard = styled.div`
  height: 20rem;
`;

const OptionTitle = styled.h1`
  font-size: 1.6rem;
  overflow-wrap: break-word;
  width: 20rem;
  color: #be0000;
`;

const OptionDescription = styled.p`
  overflow-wrap: break-word;
  width: 15rem;
`;

const OptionIcon = styled.div`
  font-size: 1.3rem;
  border: 1px solid #be0000;
  display: inline-block;
  border-radius: 0.3rem;
  padding: 1.3rem;
  margin-left: 4rem;
`;

const WhyUs = () => {
  return (
    <WhyUsContainer>
      <TitleWrapper>
        <Line />
        <TitleText>WHY US ?</TitleText>
        <Line />
      </TitleWrapper>
      <WhyUsOptionWrapper>
        {WhyUsOptions.map((option) => (
          <WhyUsOptionCard>
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
