import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../contexts/products-context/products-context';
import { useUserContext } from '../contexts/user-context/user-context';
import { RxCross2 } from 'react-icons/rx';
import { IoMdArrowDown } from 'react-icons/io';
import {
  BrandsList,
  NavCategoriesList
} from '../../constants/DataObjects/DataObjects';
import UserLoggedButton from './UserLoggedButton';
import CartButton from './CartButton';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  z-index: 1000;
  background-color: rgba(36, 29, 29, 0.2);
  display: none;

  @media only screen and (max-width: 800px) {
    display: initial;
  }
`;

const SideNavContainer = styled.div`
  position: fixed;
  background-color: white;
  z-index: 2000;
  width: 50%;
  height: 100%;
  overflow-x: hidden;
  display: none;

  @media only screen and (max-width: 800px) {
    display: initial;
  }

  @media only screen and (max-width: 430px) {
    width: 60%;
  }
`;

const SideNavHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ExitSideNav = styled.button`
  all: unset;
  cursor: pointer;
`;

const CrossIconWrapper = styled.div`
  border: 1px solid rgb(170, 170, 170, 0.9);
  padding: 0.2rem;
`;

const UsernameTitle = styled.h3`
  @media only screen and (max-width: 450px) {
    font-size: 1rem;
  }
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const NavButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavOptionText = styled.p`
  width: 10rem;
`;

const NavButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 98%;
  padding: 0.2rem;

  &:hover {
    background-color: rgb(146, 143, 143, 0.2);
  }
`;

const NavLink = styled.a`
  all: unset;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(146, 143, 143, 0.2);
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

const SideNav = () => {
  const ProductsCtx = useProductsContext();
  const UserCtx = useUserContext();
  const [toggleCategories, setToggleCategories] = useState(false);
  const [toggleBrands, setToggleBrands] = useState(false);

  useEffect(() => {
    const handleOverlayClick = () => {
      ProductsCtx?.ToggleSideNav();
    };

    const overlay = document.getElementById('overlay');
    overlay?.addEventListener('click', handleOverlayClick);

    return () => {
      overlay?.removeEventListener('click', handleOverlayClick);
    };
  }, [ProductsCtx]);

  return (
    <>
      <Overlay id="overlay" />
      <SideNavContainer>
        <SideNavHeader>
          <UsernameTitle>
            {UserCtx?.is_logged_in
              ? 'Hello , ' + UserCtx.user?.fullname
              : 'Welcome User'}
          </UsernameTitle>
          <ExitSideNav
            onClick={() => {
              ProductsCtx?.ToggleSideNav();
            }}
          >
            <CrossIconWrapper>
              <RxCross2 />
            </CrossIconWrapper>
          </ExitSideNav>
        </SideNavHeader>
        <NavButtonsWrapper>
          <NavButton
            onClick={() => {
              setToggleCategories(!toggleCategories);
            }}
          >
            <NavButtonWrapper>
              <NavOptionText>Categories</NavOptionText> <IoMdArrowDown />
            </NavButtonWrapper>
          </NavButton>
          {toggleCategories &&
            NavCategoriesList.map((cat) =>
              cat.categories.map((navcateg, index) => (
                <NavLink key={index} href={navcateg.link}>
                  {navcateg.label}
                </NavLink>
              ))
            )}
          <NavButton
            onClick={() => {
              setToggleBrands(!toggleBrands);
            }}
          >
            <NavButtonWrapper>
              <NavOptionText>Brands</NavOptionText> <IoMdArrowDown />
            </NavButtonWrapper>
          </NavButton>

          {toggleBrands &&
            BrandsList.map((brand, index) =>
              brand.categories.map((brandcat) => (
                <NavLink href={`/brands/${brandcat}`} key={index}>
                  {brandcat}
                </NavLink>
              ))
            )}
        </NavButtonsWrapper>
        <ButtonsWrapper>
          <UserLoggedButton />
          <CartButton />
        </ButtonsWrapper>
      </SideNavContainer>
    </>
  );
};

export default SideNav;
