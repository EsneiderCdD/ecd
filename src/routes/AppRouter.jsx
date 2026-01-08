import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";

import EffectsPlayground from "../pages/EffectsPlayground.jsx";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/playground" element={<EffectsPlayground />} />
    </Routes>
  );
}

export default AppRouter;