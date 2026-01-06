import { Routes, Route } from "react-router-dom";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
    </Routes>
  );
}

export default AppRouter;