import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

export default function FeaturedProjects() {
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const projectsSlice3 = gcsData.Projects || [];

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-2xl text-blue-600 mb-16">
            FEATURES PROJECTS
          </h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
          {/* Best Quality */}
          {projectsSlice3.slice(0, 3).map((project) => (
            <div
              key={project.project_id}
              className="flex flex-col sm:mx-4 md:mx-0"
            >
              <Link
                to={`/projects/${project.project_id}`}
                onClick={scrollToTop}
              >
                <div className="flex justify-center items-center">
                  <img
                    src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${project.images[0]}`}
                    alt="Street constructions"
                    className="w-96 h-64"
                  />
                </div>
                {console.log(project)}
                <div className="flex justify-start items-start">
                  <p className="font-semibold mx-4 my-4 text-xl text-blue-600">
                    {project.project_name}
                  </p>
                  {/* <p className="flex justify-start items-start">
                    {project.location}
                  </p> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center sm:my-8 md:my-16">
        <Link to="/projects" onClick={scrollToTop}>
          <button className="py-4 px-8 bg-atlantis-500 text-white font-semibold text-lg">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
