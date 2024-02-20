import React from 'react';
import Socials from './HeaderComponents/Socials';
import Navigation from './HeaderComponents/Navigation';
import HeaderNotifications from './HeaderComponents/HeaderNotifications';
import styled from 'styled-components';

const Header = () => {
  return (
    <>
      <Socials />
      <Navigation />
      <HeaderNotifications />
    </>
  );
};

export default Header;
