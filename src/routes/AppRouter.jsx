// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DesktopFolder from "../pages/DesktopFolder/DesktopFolder";
import Projects from "../pages/Projects/Projects.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desktop" element={<DesktopFolder />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default AppRouter;
