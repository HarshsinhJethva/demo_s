import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from '@hooks/index';
import { useNavigation } from '@react-navigation/native';
import authActions from '@store/auth';
import { helpers } from '@utils';

const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const loginData = useSelector(state => state.login);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const loader = useMemo(() => {
    return loginData?.loading;
  }, [loginData]);

  const state = {
    email,
    setEmail,
    emailError,
    setEmailError,

    password,
    setPassword,
    passwordError,
    setPasswordError,
  };

  useEffect(() => {
    const response = helpers.apiResponseHandler(loginData, () => {
      dispatch(authActions.clearLoginResponse());
    });

    if (response) {
      if (response == 'Invalid password!'){
        
      }
    }
  }, [loginData]);

  const onPressLogin = () => {
    let isValid = true;

    // Email validation
    if (!email.trim()) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      const data = {
        email: email,
        password: password,
      };

      dispatch(authActions.login(data));
    }
  };
  return { state, onPressLogin };
};

export default useLogin;
