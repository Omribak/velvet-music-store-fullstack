import React from 'react';
import styled from 'styled-components';
import { FooterColumns } from '../../../../../constants/DataObjects/DataObjects';
import { Line } from '../content/ContentComponents/ProductsCategories/ProductsCategories';
import Copyright from './Copyright';

const FooterContainer = styled.div`
  /* background-color: rgb(190, 0, 0, 0.8); */
  background-color: rgb(163, 33, 33);
  color: white;
  padding: 2rem;
`;

const FooterNavColumns = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterNavLinks = styled.div``;

const ColumnTitle = styled.h1`
  border-bottom: 3px solid white;
  display: block;
  margin-bottom: 2rem;
  text-align: center;
`;

const ColumnText = styled.p`
  width: 20rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
`;

const WhoAreWeColumn = styled.div``;

const ContactUsColumn = styled.div``;

const FooterLine = styled.hr``;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterNavColumns>
          <FooterNavLinks>
            <ColumnTitle>{FooterColumns.navlinks.title}</ColumnTitle>
            {FooterColumns.navlinks.links.map((link, index) => (
              <div key={index}>
                <NavLink href="">{link}</NavLink>
                {index === FooterColumns.navlinks.links.length - 1 ? null : (
                  <FooterLine />
                )}
              </div>
            ))}
          </FooterNavLinks>
          <WhoAreWeColumn>
            <ColumnTitle>{FooterColumns.information.title}</ColumnTitle>
            <ColumnText>{FooterColumns.information.content}</ColumnText>
          </WhoAreWeColumn>
          <ContactUsColumn>
            <ColumnTitle>{FooterColumns.contact.title}</ColumnTitle>
            <ColumnText>Address : {FooterColumns.contact.address}</ColumnText>
            <ColumnText>Phone : {FooterColumns.contact.phone}</ColumnText>
          </ContactUsColumn>
        </FooterNavColumns>
      </FooterContainer>
      <Copyright />
    </>
  );
};

export default Footer;
