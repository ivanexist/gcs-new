import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

const ProjectCard = ({ project, projectId }) => {
  const { gcsData } = useContext(GCSContext);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // const [services, setServices] = useState([]);
  // Function to find service name based on service_id
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };
  console.log(gcsData.Services);

  return (
    <div>
      <div className="mx-auto mt-11 w-full bg-white shadow-md duration-300 hover:shadow-lg">
        <Link
          key={project.project_id}
          to={`/projects/${project.project_id}`}
          onClick={scrollToTop}
        >
          <img
            className="h-72 w-full object-cover object-center"
            src={`../../../public/images/${project.images[0]}`}
            onClick={scrollToTop}
            alt="Product Image"
          />
          <div className="p-4">
            <h2 className="mb-2 text-base font-semibold dark:text-white text-blue-600">
              {project.project_name}
            </h2>
            <p className="mb-2 text-sm dark:text-gray-300 text-gray-400">
              {getServiceName(project.service_id)}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
