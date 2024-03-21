import React, { useState } from 'react';
import styled from 'styled-components';
import { LoginButton } from '../home/sections/header/HeaderComponents/Navigation';
import { useUserContext } from '../../contexts/user-context/user-context';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  AuthButton,
  AuthForm,
  FormInput,
  FormWrapper,
  InputWrapper
} from '../../utils-components/AuthFormStyles';

const LoginPageContainer = styled.div`
  padding: 3rem;
`;

// const FormWrapper = styled.div`
//   background-color: rgb(182, 182, 182, 0.09);
//   padding: 7rem;
//   display: flex;
//   flex-direction: column;
//   gap: 3rem;
//   align-items: center;
//   justify-content: center;
//   width: 20rem;
//   margin: 0 auto;
//   border: 1px solid black;
// `;

// const LoginForm = styled.form``;

// const LoginFormInput = styled.input`
//   width: 15rem;
//   text-indent: 0.3rem;
//   height: 2rem;
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 2rem;
// `;

// const LoginPageButton = styled(LoginButton)`
//   padding: 1.2rem;
//   width: 15rem;
// `;

const CreateAccountButton = styled(LoginButton)``;

const NoAccountText = styled.p``;

const NoAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1``;

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const UserCtx = useUserContext();

  const handleInputChange = (field: string, value: string) => {
    if (field === 'email') {
      setEmail(value);
    } else if (field === 'password') {
      setPassword(value);
    }
  };

  const handleLoginButtonClicked = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginSuccess = await UserCtx?.LoginUser(email, password);
    if (loginSuccess) {
      toast.success('Login Sucessful');
      navigate('/');
    }
  };

  const MoveToSignupPage = () => {
    navigate('/signup');
  };

  return (
    <LoginPageContainer>
      <AuthForm>
        <FormWrapper>
          <Title>LOGIN</Title>
          <InputWrapper>
            <FormInput
              placeholder="EMAIL"
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <FormInput
              placeholder="PASSWORD"
              type="password"
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </InputWrapper>
          <AuthButton onClick={handleLoginButtonClicked}>LOGIN</AuthButton>
          <NoAccountWrapper>
            <NoAccountText>Don't have an account ?</NoAccountText>
            <CreateAccountButton onClick={MoveToSignupPage}>
              Create New Account
            </CreateAccountButton>
          </NoAccountWrapper>
        </FormWrapper>
      </AuthForm>
    </LoginPageContainer>
  );
};

export default LoginPage;
