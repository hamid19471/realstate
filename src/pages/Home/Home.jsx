import HeroSection from "../../components/HeroSection/HeroSection";
import Discover from "../../components/HomeSection/Discover";
import PropertyList from "../../components/PropertyList/PropertyList";
import SearchBox from "../../components/SearchBox/SearchBox";
import Subscription from "../../components/Subscription/Subscription";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchBox />
      <Discover />
      <PropertyList />
      <Testimonials />
      <Subscription />
    </div>
  );
};
export default Home;
