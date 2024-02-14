import React from 'react';
import Slider from './ContentComponents/Slider';
import ProductsCategories from './ContentComponents/ProductsCategories/ProductsCategories';
import WhyUs from './ContentComponents/WhyUs';
import CarouselTools from './ContentComponents/CarouselTools';

const Content = () => {
  return (
    <>
      <CarouselTools />
      <ProductsCategories />
      <WhyUs />
    </>
  );
};

export default Content;
