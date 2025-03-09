import { useContext } from "react";
import Category from "../filterandsort/Category";
import ProjectCard from "./ProjectCard";
import { GCSContext } from "../../context/GCSContext";
import { motion } from "framer-motion";
import Index1 from "../../json/Index";
// import { useContext } from "react";

const GridProjects = ({
  currentProjects,
  totalPages,
  currentPage,
  onHandlePageChange,
}) => {
  const { gcsData } = useContext(GCSContext);

  return (
    <div className="sm:mx-0 md:mx-8 lg:mx-auto sm:max-w-3xl md:max-w-4xl lg:max-w-7xl mb-24">
      <motion.div
        initial="hiddenY"
        whileInView="visibleY"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-medium my-4 mb-8 pb-2 text-blue-600 sm:text-xl md:text-2xl font-PlayfairDisplay border-b border-b-malachite-600 w-fit text-center mx-auto uppercase">
          OUR Projects
        </h1>
        <p className="font-bold my-4 mb-12 text-blue-700 sm:text-3xl lg:text-4xl font-PlayfairDisplay">
          Explore our standout construction projects
        </p>
      </motion.div>
      <div className="grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Filters */}
        <div className="col-span-4">
          <div className="grid lg:grid-cols-3 gap-x-1 gap-y-2 sm:grid-cols-1 md:grid-cols-2 xl:gap-x-4 sm:pr-8 lg:pr-0">
            {gcsData.Projects.map((project, indexMotion) => (
              <ProjectCard
                project={project}
                key={project.project_id}
                projectId={project.project_id}
                indexMotion={indexMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default GridProjects;
