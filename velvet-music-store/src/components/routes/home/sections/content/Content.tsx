import React from 'react';
import Slider from './ContentComponents/Slider';
import ProductsCategories from './ContentComponents/ProductsCategories/ProductsCategories';
import WhyUs from './ContentComponents/WhyUs';

const Content = () => {
  return (
    <>
      <Slider />
      <ProductsCategories />
      <WhyUs />
    </>
  );
};

export default Content;
