import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Hotels from "./pages/Hotels/Hotels";
import Contact from "./pages/Contact/Contact";
import SingleProperty from "./pages/SingleProperty/SingleProperty";
import { useEffect } from "react";
import SearchResult from "./pages/SearchResult/SearchResult";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="aj_container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/:id" element={<SingleProperty />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
