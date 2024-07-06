import styles from './Button.module.scss';

const Button = ({ children, className, variant = 'default', ...props }) => {
  return (
    <button className={`${className ? className : ''} ${styles.btn} ${styles[variant]}  `} {...props}>
      {children}
    </button>
  );
};

export default Button;
