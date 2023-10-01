import CartItems from "../Cartitem/CartItem";

const SingleGuestCard = () => {
  return (
    <div className="absolute bg-slate-200 p-4 rounded-lg shadow-lg w-[220px] md:my-1">
      <CartItems title="Adult" number={1} range={3} />
      <CartItems title="Children" number={0} range={4} />
      <CartItems title="room" number={1} range={6} />
    </div>
  );
};

export default SingleGuestCard;
