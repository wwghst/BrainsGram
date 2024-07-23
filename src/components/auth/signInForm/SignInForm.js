import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SignInForm.scss';
import { useFormik } from 'formik';
import { SignInSchema } from './constans/SignInSchema';
import InputBlock from './components/InputBlock/InputBlock';
import { Button } from '../../../shared';


const inputArray = [
  { type: 'text', name: 'name' },
  { type: 'email', name: 'email' },
  { type: 'password', name: 'password' },
  { type: 'password', name: 'confirm password' },
];

const SignInForm = () => {
  const useForm = (form) => ({ ...useFormik(form)});


  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      'confirm password': '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => onSubmit(values),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className="wrapper">
      <form className="signForm" onSubmit={form.handleSubmit}>
        <div className="signForm__tittles">
          <span className="signForm__tittle">Welcome to </span>
          <span className="signForm__tittle--font">Brainsgram</span>
        </div>
        <div className="signForm__links">
        <NavLink 
          to='/' 
          className="signForm__link">
            Login
          </NavLink>
          <span className="signForm__stick">|</span>
          <NavLink
            to='/registration' 
            className="signForm__link signForm__link--active">
            Registration
          </NavLink>
        </div>
        <div className={'form_block'}>
          <div className="signForm__inputs">
            {inputArray.map((input, index) => (
              <InputBlock
                key={index}
                {...input}
                values={form.values[input.name]}
                onChange={(e) => form.setFieldValue(`${input.name}`, e.target.value)}
                error={form.errors[input.name]}
              >
                {input.name}
              </InputBlock>
            ))}
          </div>
          <Button className={'signForm__btn'} type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
