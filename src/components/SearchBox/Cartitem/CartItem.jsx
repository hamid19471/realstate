const CartItems = ({ options, title, minLimit, handleGestOptions }) => {
  return (
    <div className="flex items-center justify-between gap-2 my-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div>
        <button
          onClick={() => handleGestOptions(title, "decrement")}
          className="btn btn-primary btn-sm rounded-none rounded-l-md text-white"
          disabled={options[title] <= minLimit}
        >
          -
        </button>
        <span className="rounded-none px-3">{options[title]}</span>
        <button
          onClick={() => handleGestOptions(title, "increment")}
          className="btn btn-primary btn-sm rounded-none rounded-r-md text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
