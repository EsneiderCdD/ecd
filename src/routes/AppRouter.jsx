// src/router/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

// puedes crear más páginas pero usan la misma estructura base
function Projects() {
  return <h2>Proyectos (contenido aquí)</h2>;
}

function Desktop() {
  return <h2>Escritorio (contenido aquí)</h2>;
}

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/desktop" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<About />} />
    </Routes>
  );
}

export default AppRouter;
