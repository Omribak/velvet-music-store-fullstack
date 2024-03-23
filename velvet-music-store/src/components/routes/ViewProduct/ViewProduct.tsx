import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../../contexts/products-context/products-context';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import { useCartContext } from '../../contexts/cart-context/cart-context';
import { useUserContext } from '../../contexts/user-context/user-context';
import toast from 'react-hot-toast';
import Loader from '../../utils-components/Loader';

const ViewProductContainer = styled.div`
  padding: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10rem;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 20rem;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5srem;
`;

const ProductTitle = styled.h1`
  width: 15rem;
`;

const ProductPrice = styled.p`
  text-align: center;
`;

const AddToCartButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const NumOfProducts = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NumIconButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const DisplayNum = styled.p`
  border: 1px solid black;
  background-color: white;
  padding: 1rem;
`;

const ProductDescriptionWrapper = styled.div``;

const ProductDetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10rem;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ProductDescription = styled.p`
  width: 45rem;
  font-size: 1.2rem;
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 980px) {
    width: 30rem;
  }

  @media only screen and (max-width: 510px) {
    width: 20rem;
  }
`;

const ViewProduct = () => {
  const ProductsCtx = useProductsContext();
  const CartCtx = useCartContext();
  const UserCtx = useUserContext();
  const { productID } = useParams();
  const [numProducts, setNumProducts] = useState(0);

  useEffect(() => {
    if (productID) {
      ProductsCtx?.GetSingleProduct(productID);
    }
  }, [productID]);

  const product = ProductsCtx?.single_product;

  const handleNumProductsButton = (sign: string) => {
    setNumProducts((prev) => {
      if (sign === 'minus') {
        if (prev !== 0) {
          return prev - 1;
        }
      } else {
        return prev + 1;
      }
      return 0;
    });
  };

  const AddProductToCart = () => {
    if (!UserCtx?.is_logged_in) {
      return toast.error('You are not logged in');
    }
    if (numProducts === 0) {
      return;
    }
    if (product) {
      if (UserCtx.user?.id && productID) {
        CartCtx?.AddProductToCart(UserCtx.user?.id, productID, numProducts);
      }
    }
  };

  if (ProductsCtx?.single_product_loading) {
    return (
      <ViewProductContainer>
        <Loader />
      </ViewProductContainer>
    );
  }

  return (
    <ViewProductContainer>
      <ProductDetailsWrapper>
        <ProductImage src={`/products-images/${product?.image}`} />
        <ProductDetails>
          <ProductTitle>{product?.name}</ProductTitle>
          <ProductPrice>{product?.price}$</ProductPrice>
          <NumOfProducts>
            <NumIconButton onClick={() => handleNumProductsButton('minus')}>
              <FiMinus />
            </NumIconButton>
            <DisplayNum>{numProducts}</DisplayNum>
            <NumIconButton onClick={() => handleNumProductsButton('plus')}>
              <FiPlus />
            </NumIconButton>
          </NumOfProducts>
          <AddToCartButton onClick={AddProductToCart}>
            ADD TO CART
          </AddToCartButton>
        </ProductDetails>
      </ProductDetailsWrapper>
      <ProductDescriptionWrapper>
        <ProductDescription>{product?.description}</ProductDescription>
      </ProductDescriptionWrapper>
    </ViewProductContainer>
  );
};

export default ViewProduct;
