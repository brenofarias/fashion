/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import SocialLogin from '../components/SocialLogin';
import { Button, Container, Text } from '../../components';
import { Box } from '../../components/Theme';
import TextInput from '../components/Form/TextInputs';
import CheckBox from '../components/Form/CheckBox';

const emailValidator = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

const passwordValidator = (password: string) => password.length >= 6;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button variant="transparent" onPress={() => alert('SignUP')}>
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your Password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <CheckBox label="Remember me" />
          <Button variant="transparent" onPress={() => true}>
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            onPress={() => true}
            label="Log into your account"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
