const Button = ({ children, className }) => {
  return <button className={`${className} py-2 px-5 w-fit`}>{children}</button>;
};

export default Button;
