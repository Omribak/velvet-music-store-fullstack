import React from 'react';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Footer from './sections/footer/Footer';
import Content from './sections/content/Content';

const Home = () => {
  return (
    <>
      <Header />
      <Content />
      <About />
      <Footer />
    </>
  );
};

export default Home;
