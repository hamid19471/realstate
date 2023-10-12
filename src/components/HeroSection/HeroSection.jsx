const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between pt-10">
      <div>
        <h2 className="font-extrabold text-center lg:text-left text-5xl xl:text-7xl md:text-5xl lg:text-5xl w-full lg:w-[558px] xl:leading-[88px] mb-8">
          Let’s start the search for your dream home!
        </h2>
        <p className="font-light lg:text-justify w-full text-center xl:w-[443px]">
          Your dream home awaits! This stunning property features all the
          amenities and comfort you desire.
        </p>
        <div className="flex flex-col items-center justify-center lg:items-start gap-4 mt-8 xl:mt-20">
          <h3 className="font-bold text-2xl">Our Partner</h3>
          <div className="flex items-center justify-center space-x-4 lg:mt-5">
            <img src={"images/Airbnb svg.png"} alt="" />
            <img src={"images/Traveloka svg.png"} alt="" />
            <img src={"images/Pegi svg.png"} alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src={"images/hero-image.png"} alt="Home Page" className="mt-4" />
      </div>
    </div>
  );
};
export default HeroSection;
