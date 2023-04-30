import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Project from "./Pages/Projects";
import Resume from "./Pages/Resume";
import Brand from "./Pages/Brand";
import UIUX from "./Pages/Ui-Ux";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/ui-ux" element={<UIUX />} />
          <Route path="/brand" element={<Brand />} />
          {/* <Route path="/portuguese" element="https://pg.algofame.org" /> */}
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
