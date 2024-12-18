import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import ProjectCard from "../projects/ProjectCard";

export default function FeaturedProjects() {
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const projectsSlice3 = gcsData.Projects || [];

  return (
    <div>
      <div className="flex flex-col sm:my-4 lg:my-8 mr-8">
        <div className="flex justify-center items-center text-center">
          <h1 className="font-bold text-3xl text-blue-600 mb-8">
            FEATURES PROJECTS
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
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
      <div className="flex justify-center items-center sm:my-8 md:my-12">
        <Link to="/projects" onClick={scrollToTop}>
          <button className="py-4 px-8 bg-atlantis-500 hover:bg-atlantis-400 text-white font-semibold text-xl rounded-lg">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
