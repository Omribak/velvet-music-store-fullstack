import styled from 'styled-components';
import { LoginButton } from '../routes/home/sections/header/HeaderComponents/Navigation';

export const FormWrapper = styled.div`
  background-color: rgb(182, 182, 182, 0.09);
  padding: 7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  width: 20rem;
  margin: 0 auto;
  border: 1px solid black;

  @media only screen and (max-width: 670px) {
    padding: 4rem;
  }

  @media only screen and (max-width: 540px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 450px) {
    padding: 1rem;
    width: 15rem;
  }
`;

export const AuthForm = styled.form``;

export const FormInput = styled.input`
  width: 15rem;
  text-indent: 0.3rem;
  height: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const AuthButton = styled(LoginButton)`
  padding: 1.2rem;
  width: 15rem;
`;
