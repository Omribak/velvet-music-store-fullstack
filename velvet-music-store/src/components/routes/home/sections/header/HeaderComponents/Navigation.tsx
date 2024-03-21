import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { LuChevronDown } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';
import {
  BrandsList,
  NavCategoriesList
} from '../../../../../../constants/DataObjects/DataObjects';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../../../contexts/user-context/user-context';
import { FaRegUser } from 'react-icons/fa';
import { useCartContext } from '../../../../../contexts/cart-context/cart-context';
import useClickOutside from '../../../../../../custom-hooks/useClickOutside';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { RxHamburgerMenu } from 'react-icons/rx';
import SideNav from '../../../../../utils-components/SideNav';
import { useProductsContext } from '../../../../../contexts/products-context/products-context';
import UserLoggedButton from '../../../../../utils-components/UserLoggedButton';
import CartButton from '../../../../../utils-components/CartButton';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  padding: 0.3rem;

  @media only screen and (max-width: 1600px) {
    flex-direction: column;
    padding: 2rem;
  }

  @media only screen and (max-width: 1300px) {
  }
`;

const LogoLink = styled.a`
  all: unset;
  cursor: pointer;
`;

const Logo = styled.h1``;

const SearchInput = styled.input`
  width: 30rem;
  border-radius: 10px;
  text-indent: 0.6rem;
  height: 2rem;
  background-color: #f2f2f2;
  border: 1px solid rgba(184, 184, 184, 0.3);

  &:focus {
    outline-color: rgba(184, 184, 184, 0.3);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  display: block;
  right: 2.5%;
  top: 0.5rem;
`;

const LogoAndSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.2rem;
`;

const NavButtonDiv = styled.div`
  display: flex;
  gap: 0.2rem;
  padding: 0.4rem;
  border-top: 4px solid white;
  position: relative;

  &:hover {
    border-top: 2px solid rgb(190, 0, 0);
    border-width: 0.3rem;
  }

  &.active {
    border-top: 2px solid rgb(190, 0, 0);
    border-width: 0.3rem;
  }
`;

const CategoriesButton = styled.button`
  border: transparent;
  cursor: pointer;
  background-color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

const BrandsButton = styled.button`
  border: transparent;
  cursor: pointer;
  background-color: white;
  text-transform: uppercase;
  font-weight: bold;
`;

export const LoginButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

export const LogoutButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const InputContainer = styled.div`
  position: relative;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const DisplayOptions = styled.div`
  position: absolute;
  background-color: white;
  width: 30rem;
  z-index: 2;
  display: flex;
  /* bottom: 59.5%; */
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
  gap: 3rem;

  @media only screen and (max-width: 1600px) {
    top: 25%;
  }
`;

const DisplayBrands = styled.div`
  position: absolute;
  background-color: white;
  width: 40rem;
  z-index: 2;
  display: flex;
  top: 12%;
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  gap: 3rem;

  @media only screen and (max-width: 1600px) {
    top: 25%;
  }
`;

const ButtonContainer = styled.div``;

const NavCat = styled.div``;

const NavcatTitle = styled.p`
  font-weight: bold;
  display: inline-block;
  overflow-wrap: break-word;
`;

const DisplayLink = styled.a`
  all: unset;
  cursor: pointer;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

const NavButtonsAndCart = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;

  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const HamburgerWrapper = styled.button`
  all: unset;
  cursor: pointer;

  display: none;

  @media only screen and (max-width: 800px) {
    display: contents;
  }
`;

const Navigation = () => {
  const [displayCategories, setDisplayCategories] = useState(false);
  const [displayBrands, setDisplayBrands] = useState(false);
  const categoriesClickOutsideRef = useRef<HTMLButtonElement>(null);
  const categoriesDisplayRef = useRef<HTMLDivElement>(null);
  const brandsDisplayRef = useRef<HTMLDivElement>(null);
  const brandsClickOutsideRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const ProductsCtx = useProductsContext();

  const [searchtext, setSearchText] = useState('');

  const handleDisplayCategories = () => {
    setDisplayCategories(!displayCategories);
    if (displayBrands) {
      setDisplayBrands(false);
    }
  };

  const handleDisplayBrands = () => {
    setDisplayBrands(!displayBrands);
    if (displayCategories) {
      setDisplayCategories(false);
    }
  };

  const categoriesClickOutsideCallback = () => {
    setDisplayCategories(false);
  };

  const brandsClickOutsideCallback = () => {
    setDisplayBrands(false);
  };

  useClickOutside(
    categoriesClickOutsideRef,
    categoriesDisplayRef,
    categoriesClickOutsideCallback
  );
  useClickOutside(
    brandsClickOutsideRef,
    brandsDisplayRef,
    brandsClickOutsideCallback
  );

  const handleClickedLink = (
    link: string | undefined,
    prop: string | undefined
  ) => {
    if (link && prop) {
      navigate(link, { state: prop });
    }
  };

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const isNonAlphabetic = /[^a-zA-Z0-9\s]/.test(searchtext);
      if (isNonAlphabetic || searchtext.trim() === '') {
        toast.error(
          'Field must include alphabetic characters, numbers, and spaces.'
        );
      } else {
        navigate(`/search/${searchtext}`);
      }
    }
  };

  return (
    <NavigationContainer>
      <LogoAndSearch>
        <LogoLink href="/">
          <Logo>VelvetRosa</Logo>
        </LogoLink>
        <InputContainer>
          <SearchInput
            placeholder="Search..."
            onChange={(e) => handleChangeSearch(e)}
            onKeyDown={handleEnterKeyPress}
          />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </InputContainer>
        <HamburgerWrapper
          onClick={() => {
            ProductsCtx?.ToggleSideNav();
          }}
        >
          <RxHamburgerMenu size={30} />
        </HamburgerWrapper>
      </LogoAndSearch>
      <NavButtonsAndCart>
        <NavigationButtons>
          <ButtonContainer>
            <CategoriesButton
              onClick={handleDisplayCategories}
              ref={categoriesClickOutsideRef}
            >
              <NavButtonDiv className={displayCategories ? 'active' : ''}>
                Categories
                <LuChevronDown />
              </NavButtonDiv>
            </CategoriesButton>
            {displayCategories ? (
              <DisplayOptions ref={categoriesDisplayRef}>
                {NavCategoriesList.map((navcateg) => (
                  <NavCat key={navcateg.title}>
                    <NavcatTitle>{navcateg.title}</NavcatTitle>
                    {navcateg.categories.map((category) => (
                      <p>
                        <DisplayLink
                          key={category.label}
                          onClick={() =>
                            handleClickedLink(
                              category.link,
                              category.location_prop
                            )
                          }
                        >
                          {category.label}
                        </DisplayLink>
                      </p>
                    ))}
                  </NavCat>
                ))}
              </DisplayOptions>
            ) : null}
          </ButtonContainer>
          <BrandsButton
            onClick={handleDisplayBrands}
            ref={brandsClickOutsideRef}
          >
            <NavButtonDiv className={displayBrands ? 'active' : ''}>
              Brands
              <LuChevronDown />
            </NavButtonDiv>
          </BrandsButton>
          {displayBrands ? (
            <DisplayBrands ref={brandsDisplayRef}>
              {BrandsList.map((navcateg) => (
                <NavCat key={navcateg.title}>
                  <NavcatTitle>{navcateg.title}</NavcatTitle>
                  {navcateg.categories.map((category) => (
                    <p>
                      <DisplayLink key={category} href={`/brands/${category}`}>
                        {category}
                      </DisplayLink>
                    </p>
                  ))}
                </NavCat>
              ))}
            </DisplayBrands>
          ) : null}
        </NavigationButtons>
        {/* <div>
          <LoginButton onClick={MoveToLoginPage}>
            {IsLoggedIn ? (
              <UserInfo>
                <FaRegUser size={16} />
                {userData?.fullname}
              </UserInfo>
            ) : (
              'LOGIN'
            )}
          </LoginButton>
        </div>

        {IsLoggedIn && (
          <LogoutButton onClick={handleLogoutButton}>LOGOUT</LogoutButton>
        )} */}

        <UserLoggedButton />

        {/* <CartWrapper>
          <CartButton onClick={MoveToCartPage}>CART</CartButton>
          <ProductsCart>{CartCtx?.num_products}</ProductsCart>
        </CartWrapper> */}
        <CartButton />
      </NavButtonsAndCart>
    </NavigationContainer>
  );
};

export default Navigation;
