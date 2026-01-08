import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";
import ComingSoon from "../pages/ComingSoon.jsx";
import GlobalEffects from "../reusable/Effects/GlobalEffects";


function AppRouter() {
  return (
    <>
      <GlobalEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </>
  );
}

export default AppRouter;