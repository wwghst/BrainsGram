import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './SignInForm.scss';
import { useFormik } from 'formik';
import { SignInSchema } from './constans/SignInSchema';
import InputBlock from './components/InputBlock/InputBlock';
import { Button } from '../../../shared';
import { useHttp } from '../../../hooks/useHttp';
import { useNavigate } from 'react-router-dom';

const inputArray = [
  { type: 'text', name: 'name' },
  { type: 'email', name: 'email' },
  { type: 'password', name: 'password' },
  { type: 'password', name: 'confirmPassword' },
];

const SignInForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { request } = useHttp();
  const navigate = useNavigate();

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values) => {
      await postData(values.email, values.password, values.name);
    },
  });

  const postData = async (email, password, name) => {
    try {
      const payload = { email, password, name };
      console.log('Sending payload:', payload);
      const data = await request('http://localhost:8080/auth/register', 'POST', JSON.stringify(payload));
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
    <div className="wrapper">
      <form className="signForm" onSubmit={form.handleSubmit}>
        <div className="signForm__tittles">
          <span className="signForm__tittle">Welcome to </span>
          <span className="signForm__tittle--font">Brainsgram</span>
        </div>
        <div className="signForm__links">
          <NavLink to='/' className="signForm__link">Login</NavLink>
          <span className="signForm__stick">|</span>
          <NavLink to='/registration' className="signForm__link signForm__link--active">Registration</NavLink>
        </div>
        {error && <div className="error_message">{error}</div>}
        <div className="form_block">
          <div className="signForm__inputs">
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
          <Button className='signForm__btn' type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
