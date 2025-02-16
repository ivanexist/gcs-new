import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GCSContext } from "../../context/GCSContext";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const projectsSlice3 = gcsData.Projects || [];
  const variantY = {
    hiddenY: { y: 100, opacity: 0 },
    visibleY: { y: 0, opacity: 1 },
  };
  return (
    <div>
      <div className="flex flex-col sm:my-4 lg:my-8 mr-8">
        <motion.div
          variants={variantY}
          initial="hiddenY"
          whileInView="visibleY"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <h1 className="font-bold text-center text-3xl text-blue-600 mb-8 font-PlayfairDisplay">
            FEATURES PROJECTS
          </h1>
        </motion.div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Best Quality */}
          {projectsSlice3.slice(0, 3).map((project) => (
            <ProjectCard
              project={project}
              key={project.project_id}
              projectId={project.project_id}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-12">
        <Link to="/projects" onClick={scrollToTop}>
          <button className="py-4 px-8 bg-atlantis-500 hover:bg-atlantis-400 text-white font-semibold text-xl rounded-lg">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
