import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ProjectsDetailsContent from "../components/projects/ProjectDetailsContent";
import ScrollUpButton from "../components/ScrollUpButton";
import { useContext } from "react";
import { GCSContext } from "../context/GCSContext";
import Breadcrumb from "../components/Breadcrumb";
import Navbar2 from "../components/Navbar2";
import { motion } from "framer-motion";

const ProjectsDetails = () => {
  const { projectId } = useParams();
  const { gcsData } = useContext(GCSContext);

  const selectedProject = gcsData.Projects.find(
    (project) => project.project_id === parseInt(projectId, 10)
  );

  return (
    <div>
      <div className="sticky top-0 z-20">
        <Navbar2 />
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Breadcrumb />
        <ProjectsDetailsContent
          selectedProject={selectedProject}
          selectedProjectId={selectedProject.project_id}
        />
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  );
};
export default ProjectsDetails;
