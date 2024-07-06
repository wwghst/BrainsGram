import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ className, variant = 'default', ...props }, ref) => {
  return (
    <input
      className={`${styles.input} ${styles[variant]} ${className ? className : ''} `}
      ref={ref}
      {...props}
    />
  );
});
export default Input;
