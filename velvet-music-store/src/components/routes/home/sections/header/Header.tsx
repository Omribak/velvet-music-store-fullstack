import React from 'react';
import Socials from './HeaderComponents/Socials';
import Navigation from './HeaderComponents/Navigation';
import HeaderNotifications from './HeaderComponents/HeaderNotifications';

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
