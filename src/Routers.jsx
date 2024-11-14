import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Error from "./pages/Error";
import ProjectsDetails from "./pages/ProjectDetails";
import ServicesDetails from "./pages/ServicesDetails";

const Routers = () => {
  // const location = useLocation();

  return (
    // location={location} key={location.key}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:projectId?" element={<ProjectsDetails />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:serviceId?" element={<ServicesDetails />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default Routers;
