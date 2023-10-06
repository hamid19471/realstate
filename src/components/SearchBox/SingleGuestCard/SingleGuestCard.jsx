import { useRef } from "react";
import CartItems from "../Cartitem/CartItem";
import useOutsideClick from "../../../hooks/useOutsiteClick";

const SingleGuestCard = ({ options, handleGestOptions, setIsOpen }) => {
  const ref = useRef();
  useOutsideClick(ref, "GestOptions", () => setIsOpen(false));
  return (
    <div
      ref={ref}
      className="absolute bg-slate-200 p-4 rounded-lg shadow-lg w-[220px] md:my-1"
    >
      <CartItems
        handleGestOptions={handleGestOptions}
        title="Adults"
        options={options}
        minLimit={1}
      />
      <CartItems
        handleGestOptions={handleGestOptions}
        title="Children"
        options={options}
        minLimit={0}
      />
      <CartItems
        handleGestOptions={handleGestOptions}
        title="rooms"
        options={options}
        minLimit={1}
      />
    </div>
  );
};

export default SingleGuestCard;
