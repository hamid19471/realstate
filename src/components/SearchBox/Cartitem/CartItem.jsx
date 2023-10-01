import { useState } from "react";

const CartItems = ({ title, number, range }) => {
  const [guest, setGuest] = useState(number);
  const handleDecrese = () => {
    return guest > number ? setGuest(guest - 1) : setGuest(number);
  };
  const handleIncrease = () => {
    return guest < range ? setGuest(guest + 1) : setGuest(range);
  };
  return (
    <div className="flex items-center justify-between gap-2 my-4">
      <h3 className="font-semibold text-lg">{title}</h3>
      <div>
        <button
          onClick={handleDecrese}
          className="btn btn-primary btn-sm rounded-none rounded-l-md text-white"
        >
          -
        </button>
        <input
          className="input input-bordered input-primary w-[36px] rounded-none input-sm focus:outline-none"
          type="text"
          value={guest}
        />
        <button
          onClick={handleIncrease}
          className="btn btn-primary btn-sm rounded-none rounded-r-md text-white"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItems;
