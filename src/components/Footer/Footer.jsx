const Footer = () => {
  return (
    <div className="w-full md:py-8 md:px-2 lg:py-20 lg:px-8 xl:p-28 overflow-hidden">
      <div className=" flex flex-col md:flex-row items-start md:items-center justify-between py-2">
        <div className="flex flex-col items-start w-[380px] lg:w-[290px] md:w-[170px]">
          <h1 className="font-bold text-3xl mb-3">
            soge<span className="text-blue-700 font-bold text-3xl">King</span>
          </h1>
          <p>
            SogeKing is the best place to buy and rent your dream home
            throughout Indonesia
          </p>
        </div>
        <div className="my-5 md:my-0">
          <h3 className="font-bold text-xl mb-3">For Beginning</h3>
          <ul className="flex flex-col gap-2 ">
            <li className="footer_menu">About</li>
            <li className="footer_menu">Career</li>
            <li className="footer_menu ">Promotion</li>
          </ul>
        </div>
        <div className="my-5 md:my-0">
          <h3 className="font-bold text-xl mb-3">Overview</h3>
          <ul className="flex flex-col gap-2 ">
            <li className="footer_menu">Product</li>
            <li className="footer_menu">Categories</li>
            <li className="footer_menu ">Pricing</li>
          </ul>
        </div>
        <div className="my-5 md:my-0">
          <h3 className="font-bold text-xl mb-3">Explore Us</h3>
          <ul className="flex flex-col gap-2 ">
            <li className="footer_menu">Our Career</li>
            <li className="footer_menu">Privacy</li>
            <li className="footer_menu ">Cookie</li>
          </ul>
        </div>
        <div className="my-5 md:my-0">
          <h3 className="font-bold text-xl mb-3">Connect Us</h3>
          <ul className="flex flex-col gap-2 ">
            <li>support@sogeking.com</li>
            <li>021 - 733 - 249</li>
            <li>Serpong, South Tanggerang</li>
          </ul>
        </div>
      </div>
      <div className="text-center font-semibold py-6 mt-12">
        <p>Copyright 2023 • All Rights Reserved SogeKing</p>
      </div>
    </div>
  );
};
export default Footer;
