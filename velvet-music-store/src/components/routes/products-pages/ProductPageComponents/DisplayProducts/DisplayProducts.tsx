import styled from 'styled-components';
import HeadingComponent from './DisplayProductsComponents/HeadingComponent';
import ProductsList from './DisplayProductsComponents/ProductsList';
import { useParams } from 'react-router-dom';
import {
  Product,
  useProductsContext
} from '../../../../contexts/products-context/products-context';
import Loader from '../../../../utils-components/Loader';

const DisplayProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LoaderWrapper = styled.div`
  width: 55rem;
`;

type DisplayProductsProps = {
  products?: Product[];
};

const DisplayProducts = ({ products }: DisplayProductsProps) => {
  const ProductsCtx = useProductsContext();
  const { category } = useParams();

  const category_products = products?.filter(
    (product) => product.category === category
  );

  const num_products = category_products?.length ?? 0;

  if (ProductsCtx?.products_loading) {
    return (
      <LoaderWrapper>
        <Loader />;
      </LoaderWrapper>
    );
  }

  return (
    <DisplayProductsContainer>
      <HeadingComponent numProducts={num_products} />
      <ProductsList products={category_products || []} />
    </DisplayProductsContainer>
  );
};

export default DisplayProducts;
