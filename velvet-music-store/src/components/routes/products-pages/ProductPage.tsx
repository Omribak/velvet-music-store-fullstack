import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FilterSection from './ProductPageComponents/FilterSection';
import DisplayProducts from './ProductPageComponents/DisplayProducts/DisplayProducts';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/products-context/products-context';

const ProductPageContainer = styled.div`
  display: flex;
  gap: 5rem;
  padding: 2rem 10rem;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProductPage = () => {
  const ProductsCtx = useProductsContext();
  const products = ProductsCtx?.products;

  const [productsMaxPrice, setProductsMaxPrice] = useState<number>(0);
  const { category } = useParams();

  // useEffect(() => {
  //   ProductsCtx?.ResetFilters();
  // }, [ProductsCtx]);

  // useEffect(() => {
  //   return () => {
  //     ProductsCtx?.ResetFilters();
  //   };
  // }, []);

  useEffect(() => {
    const category_original_products = ProductsCtx?.original_products.filter(
      (product) => product.category === category
    );

    const maxPrice = Math.max(
      ...(category_original_products?.map((product) => product.price) || [])
    );

    setProductsMaxPrice(maxPrice);
  }, [products, ProductsCtx?.original_products, category]);

  return (
    <ProductPageContainer>
      <FilterSection products={products} maxPrice={productsMaxPrice} />
      <DisplayProducts products={products} />
    </ProductPageContainer>
  );
};

export default ProductPage;
