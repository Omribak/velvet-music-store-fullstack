import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Product,
  useProductsContext
} from '../../contexts/products-context/products-context';
import styled from 'styled-components';
import ProductCard from '../products-pages/ProductPageComponents/DisplayProducts/DisplayProductsComponents/ProductCard';
import Loader from '../../utils-components/Loader';

const SearchPageContainer = styled.div``;

const SearchCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;

const NoItemsFound = styled.h1`
  text-align: center;
  padding: 3rem;
`;

const SearchPage = () => {
  const { searchInput } = useParams();
  const ProductsCtx = useProductsContext();
  const [loading, setLoading] = useState(false);
  const [searchProducts, setSearchProducts] = useState<Product[] | undefined>();

  console.log(searchInput);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (searchInput) {
          const response = await ProductsCtx?.SearchProducts(searchInput);
          setSearchProducts(response?.products);

          console.log(response?.results);
        }
      } catch (error) {
        console.error('Error fetching search products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ProductsCtx, searchInput]);

  if (loading) {
    return <Loader />;
  }

  if (searchProducts?.length === 0) {
    return (
      <NoItemsFound>There was no matching products to be found.</NoItemsFound>
    );
  }

  return (
    <SearchPageContainer>
      <SearchCardsWrapper>
        {searchProducts?.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </SearchCardsWrapper>
    </SearchPageContainer>
  );
};

export default SearchPage;
