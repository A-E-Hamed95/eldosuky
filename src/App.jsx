import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import HomePage from "./pages/Home/HomePage";
import Footer from "./components/Footer/Footer";
import ProjectsDetails from "./components/Projects/ProjectsDetails";
import { useRef } from "react";
import ReviewsPage from "./pages/Reviews/ReviewsPage";
import Products from "./components/Products/Products";

const App = () => {
  const footerRef = useRef(null);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects-details/:category"
          element={<ProjectsDetails />}
        />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer ref={footerRef} />
    </Router>
  );
};

export default App;
