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
        >
          <h1 className="font-medium my-4 mb-8 pb-2 text-blue-600 text-2xl font-PlayfairDisplay border-b border-b-malachite-600 w-fit text-center mx-auto uppercase">
            Features Projects
          </h1>
          <p className="font-bold my-4 mb-12 text-blue-700 text-4xl font-PlayfairDisplay">
            Explore our standout construction projects
          </p>
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
          <button className="py-4 px-8 bg-malachite-600 hover:bg-malachite-500 text-white font-semibold text-xl rounded-lg">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
