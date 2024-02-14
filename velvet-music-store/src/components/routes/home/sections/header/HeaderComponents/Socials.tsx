import React from 'react';
import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { ContactTextSocials } from '../../../../../../constants/Strings/Strings';

const SocialsContainer = styled.div`
  background-color: rgb(190, 0, 0);
  height: 2.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const SocialsIcons = styled.div`
  display: flex;
  align-items: center;
`;

const ContactNumber = styled.div``;

const ContactText = styled.p`
  color: white;
`;

const Socials = () => {
  return (
    <SocialsContainer>
        <FaFacebookF color="white" size={18} />
        <FaInstagram color="white" size={21} />
        <ContactText>{ContactTextSocials}</ContactText>
    </SocialsContainer>
  );
};

export default Socials;
