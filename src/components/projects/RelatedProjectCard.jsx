import { useContext } from "react";
import { GCSContext } from "../../context/GCSContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const RelatedProjectCard = ({ project, projectId }) => {
  const { gcsData, scrollToTop } = useContext(GCSContext);
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto mt-12 w-full bg-white shadow-md duration-300 hover:shadow-lg">
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
    </motion.div>
  );
};
export default RelatedProjectCard;
