import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
