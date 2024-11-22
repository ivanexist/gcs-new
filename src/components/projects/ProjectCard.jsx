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
  // console.log(gcsData.Services);

  return (
    <div>
      {/* <div className="mx-auto mt-11 w-full bg-white shadow-md duration-300 hover:shadow-lg">
        <Link
          key={project.project_id}
          to={`/projects/${project.project_id}`}
          onClick={scrollToTop}
        >
          <img
            className="h-72 w-full object-cover object-center image"
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${project.images[0]}`}
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
      </div> */}
      {/* New Project Card */}
      <div className="bg-white shadow-lg overflow-hidden my-4 rounded-lg">
        <Link
          key={project.project_id}
          to={`/projects/${project.project_id}`}
          onClick={scrollToTop}
        >
          <img
            className="w-full h-56 object-cover object-center"
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${project.images[0]}`}
            alt="avatar"
          />
          <div className="py-4 px-6">
            <h1 className="text-lg font-semibold text-blue-600">
              {project.project_name}
            </h1>
            <div className="flex gap-4">
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
                      stroke="#7edf1d"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
                      stroke="#7edf1d"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.34"
                      d="M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
                      stroke="#7edf1d"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                    <path
                      opacity="0.34"
                      d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z"
                      stroke="#7edf1d"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="px-2 text-sm">
                  {getServiceName(project.service_id)}
                </h1>
              </div>
              <div className="flex items-center mt-4 text-gray-600">
                <svg
                  className="h-6 w-6 "
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  // xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                  xmlSpace="preserve"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill="#7edf1d"
                      d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                    ></path>{" "}
                  </g>
                </svg>
                <h1 className="px-2 text-sm">{project.location}</h1>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
