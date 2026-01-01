// src/routes/AppRouter.jsx (ACTUALIZADO)
import { Routes, Route } from "react-router-dom";
// import Home from "../pages/Home/Home";
import AboutMe from "../pages/AboutMe";
import Home from "../pages/Home";
import Projects from "../pages/Projects.jsx";
import ProjectDetail from "../pages/ProjectDetail.jsx";

import Notifications from "../pages/Notifications/Notifications.jsx";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default AppRouter;