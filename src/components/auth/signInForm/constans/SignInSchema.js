import * as yup from 'yup';

export const SignInSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(4, 'The name is too short')
    .max(20, 'The name is too long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Wrong email'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'The name is too short'),
  'confirm password': yup
    .string()
    .required('Password is required')
    .oneOf([yup.ref('password'), null], 'Password mismatch'),
});
