import React, { useState } from 'react';
import { Box, Button, Switch, TextField, Typography, FormControlLabel, useTheme } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import Register from './Auth/Register';
import Login from './Auth/Login';
import { useDispatch } from 'react-redux';
import { setLogin } from '../state/first';

const validationSchema = Yup.object({
  name: Yup.string().when('isLogin', {
    is: false, // Only required in Register mode
    then: Yup.string().required('Name is required'),
  }),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});


const Auth = () => {
  const [isLogin, setIsLogin] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const green = theme.palette.primary.green;
  const bggreen = theme.palette.background.green;
  // Toggle between login and registration
  const handleSwitchChange = (event) => {
    setIsLogin(event.target.checked);
  };

  function setAuth(data) {
    const {user, token} = data
    console.log(data)
    dispatch(setLogin({user,token}))
  }


  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f3f3f3',

      }}
      display="flex"
      flexDirection="column"
      alignItems="center"

    >
      {isLogin ? <Login setAuth={setAuth} /> : <Register setAuth={setAuth} />}
      <FormControlLabel
        control={<Switch checked={isLogin} onChange={handleSwitchChange} />}
        label={isLogin ? 'Switch to Register' : 'Switch to Login'}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
      />
    </Box>
  );
};

export default Auth;
