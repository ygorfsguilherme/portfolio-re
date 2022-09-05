import Home from "pages/Home";
import Projects from "pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

export function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}
