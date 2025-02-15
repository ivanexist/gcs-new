import { useContext } from "react";
import Category from "../filterandsort/Category";
import ProjectCard from "./ProjectCard";
import { GCSContext } from "../../context/GCSContext";
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
      <div className="grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Filters */}
        <div className="col-span-4">
          <div className="grid lg:grid-cols-3 gap-x-1 gap-y-8 sm:grid-cols-1 md:grid-cols-2 xl:gap-x-4 sm:pr-8 lg:pr-0">
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
