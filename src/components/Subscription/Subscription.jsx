const Subscription = () => {
  return (
    <div className="bg-[url('/public/images/subscription-image.png')] bg-cover px-5 py-14 md:px-28 lg:px-40 lg:py-24">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-6xl text-center text-white">
          Get our special prices & latest info
        </h3>
        <div className="w-full bg-white mt-10 lg:mt-20 flex flex-col md:flex-row items-center justify-between lg:px-8 lg:py-7 px-4 py-3 rounded-xl">
          <input
            className="py-2 focus:outline-none mb-4 md:mb-0 md:border-r-2 border-r-gray-300 w-full lg:max-w-[27rem] md:max-w-[21rem] xl:max-w-[53rem] max-w-xs rounded-none"
            type="text"
            placeholder="Drop your email address here.."
          />
          <button className="btn btn-primary capitalize text-white px-8">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Subscription;
