import styles from './Button.module.scss';

const Button = ({ children, className, variant = 'default', ...props }) => {
  return (
    <button className={`${styles.btn} ${className ? className : ''} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
