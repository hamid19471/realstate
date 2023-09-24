import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Hotels from "./pages/Hotels/Hotels";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <div className="aj_container">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
