import { Link } from "react-router-dom";

const Button = ({ children, style, link = "#" }) => {
  return (
    <Link to={link}>
      <button
        className={`btn btn-block btn-primary inline-flex gap-4 text-white  hover:ring-2 hover:ring-offset-2 hover:ring-blue-700 ${style}`}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;
