import React from 'react';
import { Input } from '../../../../../shared';
import './InputBlock.scss';

const InputBlock = ({ text, error, children, className, ...props }) => {
  return (
    <label className="input-block">
      <h4 className="input-block__text">{children}</h4>
      <Input
        className={`input-block__input ${className} ${error ? 'input-block__error-input' : ''}`}
        {...props}
      />
      <span className={`input-block__error-text ${error ? 'input-block__error-text--active' : ''}`}>
        {error}
      </span>
    </label>
  );
};

export default InputBlock;
