import React from 'react';
import Header from './components/routes/home/sections/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/routes/home/sections/footer/Footer';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
