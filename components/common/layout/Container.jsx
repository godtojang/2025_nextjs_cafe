const Container = ({ children, className = "" }) => {
  return <section className={`w-full max-w-7xl mx-auto ${className}`}>{children}</section>;
};

export default Container;
