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

const SignupPageContainer = styled.div`
  padding: 3rem;
`;

const Title = styled.h1``;

const SignUpPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullname, setFullName] = useState<string>('');
  const navigate = useNavigate();

  const UserCtx = useUserContext();

  const handleInputChange = (field: string, value: string) => {
    if (field === 'email') {
      setEmail(value);
    }
    if (field === 'password') {
      setPassword(value);
    }
    if (field === 'fullname') {
      setFullName(value);
    }
  };

  const handleSignupButtonClicked = async (e: React.FormEvent) => {
    e.preventDefault();
    const signupSuccess = await UserCtx?.SignupUser(fullname, email, password);
    if (signupSuccess) {
      toast.success('User Created');
    }
  };

  return (
    <SignupPageContainer>
      <AuthForm>
        <FormWrapper>
          <Title>REGISTER</Title>
          <InputWrapper>
            <FormInput
              placeholder="FULLNAME"
              onChange={(e) => handleInputChange('fullname', e.target.value)}
            />
          </InputWrapper>
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
          <AuthButton onClick={handleSignupButtonClicked}>SIGN UP</AuthButton>
        </FormWrapper>
      </AuthForm>
    </SignupPageContainer>
  );
};

export default SignUpPage;
