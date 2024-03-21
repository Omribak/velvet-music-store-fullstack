import React from 'react';
import styled from 'styled-components';
import { useUserContext } from '../contexts/user-context/user-context';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from 'react-icons/fa';
import { useCartContext } from '../contexts/cart-context/cart-context';
import { useProductsContext } from '../contexts/products-context/products-context';

const UserLoggedContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const LoginButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const UserInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const LogoutButton = styled.button`
  border: transparent;
  color: white;
  background-color: rgb(190, 0, 0);
  padding: 0.7rem;
  cursor: pointer;
  font-weight: bold;
`;

const UserLoggedButton = () => {
  const UserCtx = useUserContext();
  const IsLoggedIn = UserCtx?.is_logged_in;
  const navigate = useNavigate();
  const userData = UserCtx?.user;
  const CartCtx = useCartContext();
  const ProductsCtx = useProductsContext();

  const MoveToLoginPage = () => {
    if (IsLoggedIn) {
    } else {
      if (ProductsCtx?.sidenav_toggle) {
        ProductsCtx.ToggleSideNav();
      }
      navigate('/login');
    }
  };

  const handleLogoutButton = () => {
    UserCtx?.LogoutUser();
    CartCtx?.ResetCart();
  };

  return (
    <UserLoggedContainer>
      <LoginButton onClick={MoveToLoginPage}>
        {IsLoggedIn ? (
          <UserInfo>
            <FaRegUser size={16} />
            {userData?.fullname}
          </UserInfo>
        ) : (
          'LOGIN'
        )}
      </LoginButton>

      {IsLoggedIn && (
        <LogoutButton onClick={handleLogoutButton}>LOGOUT</LogoutButton>
      )}
    </UserLoggedContainer>
  );
};

export default UserLoggedButton;
