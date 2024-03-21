import styled from 'styled-components';
import { Line } from '../../../../home/sections/content/ContentComponents/ProductsCategories/ProductsCategories';
import { useProductsContext } from '../../../../../contexts/products-context/products-context';
const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media only screen and (max-width: 1580px) {
    flex-direction: column;
    gap: 0rem;
  }
`;

const NumProducts = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const SortSection = styled.select`
  padding: 0.7rem;
`;

const SortOption = styled.option``;

const NumProductsText = styled.p``;

const HeadingLine = styled(Line)`
  width: 40rem;

  @media only screen and (max-width: 1300px) {
    width: 20rem;
  }
`;

const SortByText = styled.p``;

type HeadingComponentProps = {
  numProducts: number;
};

const HeadingComponent = ({ numProducts }: HeadingComponentProps) => {
  const ProductsCtx = useProductsContext();
  const handleSortValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    ProductsCtx?.ApplyFiltersAndSort({
      filters: ProductsCtx.filters_state,
      sort: event.target.value
    });
  };
  return (
    <Heading>
      <NumProducts>
        <NumProductsText>{`Found ${numProducts} products`}</NumProductsText>
        <HeadingLine />
      </NumProducts>
      <SortByText>Sort By</SortByText>
      <SortSection onChange={handleSortValue}>
        <SortOption value="Choose">Choose Selected Sort</SortOption>
        <SortOption value="priceHighLow">Price - High to Low</SortOption>
        <SortOption value="priceLowHigh">Price - Low to High</SortOption>
        <SortOption value="BrandAtoZ">Brand Name A-Z</SortOption>
      </SortSection>
    </Heading>
  );
};

export default HeadingComponent;
