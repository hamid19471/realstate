import Button from "../UiComponents/Button";

const Discover = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-24 md:mb-28 mb-14 mt-14">
      <div className="w-full">
        <h3 className="font-medium text-[30px] lg:text-[40px] mb-8">
          Discover your dream home with us
        </h3>
        <p className="text-[18px] font-light lg:w-[573px]">
          We are pleased to offer house listing services and provide various
          options and package to assist you in finding your dream home.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-7 md:mt-14 mb-8 w-auto  lg:w-[520px]">
          <div>
            <h3 className="font-medium text-[32px] text-blue-600">20K+</h3>
            <p className="text-[18px] font-light">
              Happy costumer with our service
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[32px] text-blue-600">20K+</h3>
            <p className="text-[18px] font-light">
              Happy costumer with our service
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[32px] text-blue-600">20K+</h3>
            <p className="text-[18px] font-light">
              Happy costumer with our service
            </p>
          </div>
          <div>
            <h3 className="font-medium text-[32px] text-blue-600">20K+</h3>
            <p className="text-[18px] font-light">
              Happy costumer with our service
            </p>
          </div>
        </div>
        <Button style={`px-10 capitalize text-white md:w-auto`}>
          See More
        </Button>
      </div>
      <div className="w-full md:relative ">
        <img src={"images/discover-image-01.png"} alt="" className="w-full" />
        <img
          src={"/images/discover-image-02.png"}
          alt=""
          className="hidden md:block absolute w-[350px] -bottom-16 -left-28"
        />
      </div>
    </div>
  );
};
export default Discover;
