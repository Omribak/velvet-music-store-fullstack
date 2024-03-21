import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Product,
  useProductsContext
} from '../../../contexts/products-context/products-context';
import { useLocation, useParams } from 'react-router-dom';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { SalesDiscount } from '../../../../constants/DataObjects/DataObjects';

const FilterSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 20rem;

  @media only screen and (max-width: 1070px) {
    width: 10rem;
  }
`;

const SalesAndDiscounts = styled.div``;

const FilterHeader = styled.h1`
  font-size: 1rem;
`;

const FilterText = styled.p`
  margin: 0;
  width: 7rem;
`;

const Companies = styled.div``;

const Price = styled.div``;

const ClearFiltersButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
  width: 10rem;
`;

const FilterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FilterItem = styled.li`
  all: unset;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  /* display: flex;
  gap: 1rem;
  width: 10rem; */
`;

type FilterSectionProps = {
  products?: Product[];
  maxPrice: number;
};

const FilterSection = ({ products, maxPrice }: FilterSectionProps) => {
  const ProductsCtx = useProductsContext();
  const location = useLocation();
  const { category } = useParams();
  const [price, setPrice] = useState(maxPrice);
  const category_products = ProductsCtx?.original_products?.filter(
    (product) => product.category === category
  );
  const uniqueBrands = [
    ...new Set(category_products?.map((product) => product.brand))
  ];

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSales, setSelectedSales] = useState<string[]>([]);

  useEffect(() => {
    setPrice(maxPrice);
  }, [maxPrice]);

  useEffect(() => {
    setSelectedBrands([]);
    setSelectedSales([]);
    setPrice(maxPrice);
  }, [location.state, maxPrice]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands((prevBrands) => {
      const updatedBrands = prevBrands.includes(brand)
        ? prevBrands.filter((selectedBrand) => selectedBrand !== brand)
        : [...prevBrands, brand];

      ProductsCtx?.ApplyFiltersAndSort({
        filters: {
          brands: updatedBrands,
          sales: selectedSales
        },
        sort: ProductsCtx.sort_state,
        maxPrice: price
      });
      return updatedBrands;
    });
  };

  const toggleSales = (sale: string) => {
    setSelectedSales((prevSales) => {
      const updatedSales = prevSales.includes(sale)
        ? prevSales.filter((selectedSale) => selectedSale !== sale)
        : [...prevSales, sale];

      ProductsCtx?.ApplyFiltersAndSort({
        filters: {
          brands: selectedBrands,
          sales: updatedSales
        },
        sort: ProductsCtx.sort_state,
        maxPrice: price
      });
      return updatedSales;
    });
  };

  const handleChoosePriceClick = () => {
    ProductsCtx?.ApplyFiltersAndSort({
      filters: ProductsCtx.filters_state,
      sort: ProductsCtx.sort_state,
      maxPrice: price
    });
  };

  return (
    <FilterSectionContainer>
      <SalesAndDiscounts>
        <FilterHeader>Sales And Discounts</FilterHeader>
        <FilterList>
          {SalesDiscount.map((sale) => (
            <FilterItem key={sale} onClick={() => toggleSales(sale)}>
              {selectedSales.includes(sale) ? (
                <MdCheckBox size={22} />
              ) : (
                <MdCheckBoxOutlineBlank size={22} />
              )}
              <FilterText>{sale}</FilterText>
            </FilterItem>
          ))}
        </FilterList>
      </SalesAndDiscounts>
      <Companies>
        <FilterHeader>Companies</FilterHeader>
        <FilterList>
          {uniqueBrands.map((brand) => (
            <FilterItem key={brand} onClick={() => toggleBrand(brand)}>
              {selectedBrands.includes(brand) ? (
                <MdCheckBox size={22} />
              ) : (
                <MdCheckBoxOutlineBlank size={22} />
              )}
              <FilterText>{brand}</FilterText>
            </FilterItem>
          ))}
        </FilterList>
      </Companies>
      <Price>
        <FilterHeader>Price (Max Price - {maxPrice}$)</FilterHeader>
        <FilterText> 0 - {price}$</FilterText>
        <input
          type="range"
          min={0}
          max={maxPrice}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value, 10))}
        />
      </Price>
      <ClearFiltersButton onClick={handleChoosePriceClick}>
        Choose Price
      </ClearFiltersButton>
    </FilterSectionContainer>
  );
};

export default FilterSection;
