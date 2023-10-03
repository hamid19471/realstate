import HeroSection from "../../components/HeroSection/HeroSection";
import Discover from "../../components/HomeSection/Discover";
import SearchBox from "../../components/SearchBox/SearchBox";
import Subscription from "../../components/Subscription/Subscription";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchBox />
      <Discover />
      <Testimonials />
      <Subscription />
    </div>
  );
};
export default Home;
