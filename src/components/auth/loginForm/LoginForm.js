import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputBlock from '../signInForm/components/InputBlock/InputBlock';
import { Button } from '../../../shared';
import { useHttp } from '../../../hooks/useHttp';
import { useNavigate } from 'react-router-dom';

const inputArray = [
  { type: 'text', name: 'email' },
  { type: 'password', name: 'password' },
];

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { request } = useHttp();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      await postData(values.email, values.password);
    },
  });

  const postData = async (email, password) => {
    try {
      const payload = { email, password };
      const data = await request('http://localhost:8080/auth/login', 'POST', JSON.stringify(payload));
      localStorage.setItem('token', data.token)
      setIsLoggedIn(true)
      setResponse(data);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    if (response) {
      console.log('Response received:', response);
    }
  }, [response]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home');
    }
  }, [isLoggedIn, navigate]);

  return (
    <form className="logForm" onSubmit={form.handleSubmit}>
      <div className="logForm__tittles">
        <span className="logForm__tittle">Welcome to </span>
        <span className="logForm__tittle--font">Brainsgram</span>
      </div>
      <div className="logForm__links">
        <NavLink to='/' className="logForm__link logForm__link--active">Login</NavLink>
        <span className="logForm__stick">|</span>
        <NavLink to='/registration' className="logForm__link">Registration</NavLink>
      </div>
      {error && <div className="error_message">{error}</div>}
      <div className="logForm__inputs">
        {inputArray.map((input, index) => (
          <InputBlock
            key={index}
            {...input}
            value={form.values[input.name]}
            onChange={(e) => form.setFieldValue(input.name, e.target.value)}
            error={form.errors[input.name]}
          >
            {input.name}
          </InputBlock>
        ))}
      </div>
      <Button className='logForm__btn' type="submit">
        Submit
      </Button>
    </form>
  );
};

export default LoginForm;
