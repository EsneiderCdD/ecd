// src/routes/AppRouter.jsx (ACTUALIZADO)
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DesktopFolder from "../pages/DesktopFolder/DesktopFolder";
import Projects from "../pages/Projects/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail/ProjectDetail.jsx";
import Achievements from "../pages/Achievements/Achievements.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desktop" element={<DesktopFolder />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/achievements" element={<Achievements />} />
    </Routes>
  );
}

export default AppRouter;