import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, useHistory } from 'react-router-dom';
import { routes } from 'routes';
import AuthTemplate from 'templates/AuthTemplate';
import { Formik, Form } from 'formik';
import { useAuth } from 'context/AuthContext';
import Message from 'components/atoms/Message/Message';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
  font-family: Montserrat;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match!');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push(routes.home);
    } catch {
      setError('Failed to create an account!');
    }

    setLoading(false);
  };

  return (
    <AuthTemplate pageType="saves">
      <Formik>
        {({ handleChange, handleBlur }) => (
          <>
            <Heading>Sign up!</Heading>
            {error && <Message>{error}</Message>}
            <StyledForm onSubmit={handleSubmit}>
              <StyledInput
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={emailRef}
                required
              />
              <StyledInput
                type="password"
                placeholder="password"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={passwordRef}
                required
              />
              <StyledInput
                type="password"
                placeholder="re-type password"
                onChange={handleChange}
                onBlur={handleBlur}
                ref={passwordConfirmRef}
                required
              />
              <Button disabled={loading} type="submit">
                register
              </Button>
            </StyledForm>
            <StyledLink to={routes.login}>Already have an account?</StyledLink>
          </>
        )}
      </Formik>
    </AuthTemplate>
  );
};

export default RegisterPage;
