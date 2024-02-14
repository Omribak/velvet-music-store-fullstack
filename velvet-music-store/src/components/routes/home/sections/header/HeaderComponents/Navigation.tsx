import React from 'react';
import styled from 'styled-components';
import { LuChevronDown } from 'react-icons/lu';
import { FaSearch } from 'react-icons/fa';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  padding: 0.3rem;
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

  &:hover {
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

const InputContainer = styled.div`
  position: relative;
`;

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <LeftNav>
        <Logo>LOGO</Logo>
        <InputContainer>
          <SearchInput placeholder="Search..." />
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
        </InputContainer>
      </LeftNav>
      <NavigationButtons>
        <CategoriesButton>
          <NavButtonDiv>
            Categories
            <LuChevronDown />
          </NavButtonDiv>
        </CategoriesButton>
        <BrandsButton>
          <NavButtonDiv>
            Brands
            <LuChevronDown />
          </NavButtonDiv>
        </BrandsButton>
      </NavigationButtons>
      <div>
        <LoginButton>LOGIN</LoginButton>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;
