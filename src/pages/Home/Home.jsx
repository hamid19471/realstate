import HeroSection from "../../components/HeroSection/HeroSection";
import SearchBox from "../../components/SearchBox/SearchBox";
import Subscription from "../../components/Subscription/Subscription";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchBox />
      <Testimonials />
      <Subscription />
    </div>
  );
};
export default Home;
