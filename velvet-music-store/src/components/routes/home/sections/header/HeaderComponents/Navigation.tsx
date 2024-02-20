import React, { useState } from 'react';
import styled from 'styled-components';
import { LuChevronDown } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';
import { NavCategoriesList } from '../../../../../../constants/DataObjects/DataObjects';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  padding: 0.3rem;
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

const LeftNav = styled.div`
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

const LoginButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const CartButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const InputContainer = styled.div`
  position: relative;
`;

const DisplayOptions = styled.div`
  position: absolute;
  background-color: white;
  width: 30rem;
  z-index: 2;
  display: flex;
  /* top: 120%;
  left: -70%; */
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const DisplayBrands = styled.div`
  position: absolute;
  background-color: white;
  width: 30rem;
  z-index: 2;
  display: flex;
  top: 12%;
  padding: 2rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const ButtonContainer = styled.div``;

const NavCat = styled.div``;

const NavcatTitle = styled.p`
  font-weight: bold;
  display: inline-block;
  overflow-wrap: break-word;
`;

const Navigation = () => {
  const [displayCategories, setDisplayCategories] = useState(false);
  const [displayBrands, setDisplayBrands] = useState(false);

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

  return (
    <NavigationContainer>
      <LeftNav>
        <LogoLink href="/">
          <Logo>LOGO</Logo>
        </LogoLink>
        <InputContainer>
          <SearchInput placeholder="Search..." />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </InputContainer>
      </LeftNav>
      <NavigationButtons>
        <ButtonContainer>
          <CategoriesButton onClick={handleDisplayCategories}>
            <NavButtonDiv className={displayCategories ? 'active' : ''}>
              Categories
              <LuChevronDown />
            </NavButtonDiv>
          </CategoriesButton>
          {displayCategories ? (
            <DisplayOptions>
              {NavCategoriesList.map((navcateg) => (
                <NavCat key={navcateg.title}>
                  <NavcatTitle>{navcateg.title}</NavcatTitle>
                  {navcateg.categories.map((category) => (
                    <p key={category}>{category}</p>
                  ))}
                </NavCat>
              ))}
            </DisplayOptions>
          ) : null}
        </ButtonContainer>
        <BrandsButton onClick={handleDisplayBrands}>
          <NavButtonDiv className={displayBrands ? 'active' : ''}>
            Brands
            <LuChevronDown />
          </NavButtonDiv>
        </BrandsButton>
        {displayBrands ? (
          <DisplayBrands>
            {NavCategoriesList.map((navcateg) => (
              <NavCat key={navcateg.title}>
                <NavcatTitle>{navcateg.title}</NavcatTitle>
                {navcateg.categories.map((category) => (
                  <p key={category}>{category}</p>
                ))}
              </NavCat>
            ))}
          </DisplayBrands>
        ) : null}
      </NavigationButtons>
      <div>
        <LoginButton>LOGIN</LoginButton>
      </div>
      <div>
        <CartButton>CART</CartButton>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
