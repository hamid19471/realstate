const Button = ({ children, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-block btn-primary inline-flex gap-4 text-white  hover:ring-2 hover:ring-offset-2 hover:ring-blue-700 ${style}`}
    >
      {children}
    </button>
  );
};
export default Button;
