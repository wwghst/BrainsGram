import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

const Input = forwardRef(({ className, variant = 'default', ...props }, ref) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ''} ${styles[variant]}`}
      ref={ref}
      {...props}
    />
  );
});
export default Input;
