import { Fragment, useContext, useState } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { GCSContext } from "../../context/GCSContext";
import { useParams } from "react-router-dom";
import RelatedProjects from "./RelatedProjects";

const ProjectsDetailsContent = ({ selectedProject, selectedProjectId }) => {
  const { gcsData } = useContext(GCSContext);
  // const { projectId } = useParams();

  const getClientName = (clientId) => {
    const client = gcsData.Clients.find(
      (client) => client.client_id === clientId
    );
    return client ? client.name : "Unknown Client";
  };

  // Function to find service name based on service_id
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Left & Right navigation
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle image selector below
  const selectImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <section className="flex items-center w-screen bg-white">
      <div className="justify-center flex-1 max-w-7xl mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-4">
            <div className="max-w-screen-xl mx-auto">
              {/* Main Slideshow Image */}
              <div className="relative w-screen sm:h-80 md:h-[500px] lg:h-[800px] px-1 overflow-hidden">
                <img
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${selectedProject.images[currentIndex]}`}
                  alt="slide"
                  className="w-full h-full object-cover object-center shadow-lg overflow-hidden"
                />
                {/* Left & Right Navigation */}
                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 hover:bg-gray-700"
                >
                  ❮
                </button>
                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 hover:bg-gray-700"
                >
                  ❯
                </button>
              </div>
              {/* Thumbnail Selector */}
              <div className="flex overflow-x-auto justify-center sm:w-96 md:w-full mt-4 space-x-2 px-1">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`w-full h-full border-2 ${
                      index === currentIndex
                        ? "border-blue-500"
                        : "border-transparent"
                    }  overflow-hidden focus:outline-none`}
                  >
                    <img
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${image}`}
                      alt={`thumbnail-${index}`}
                      className="w-full sm:h-24 md:h-36 lg:h-52 object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-1 sm:my-8 lg:my-16">
                <div className="col-span-2">
                  <div className="sm:mr-0 lg:mr-16 sm:px-4">
                    <h1 className="text-2xl font-semibold text-blue-600 py-4 text-center uppercase">
                      Project Description
                    </h1>
                    <p className="py-2 text-gray-600 text-left font-roboto">
                      {selectedProject.description[0].paragraph_1}
                    </p>
                    <p className="py-2 text-gray-600 text-left font-roboto">
                      {selectedProject.description[0].paragraph_2}
                    </p>
                    <p className="py-2 text-gray-600 text-left font-roboto">
                      {selectedProject.description[0].paragraph_3}
                    </p>
                  </div>
                </div>
                <div className="col-span-1 my-4">
                  <h1 className="font-semibold text-xl border-b-2 border-b-atlantis-500 text-blue-600 pb-4 uppercase text-center ">
                    {selectedProject.project_name}
                  </h1>
                  <div className="container mx-auto my-4">
                    <div className="flex flex-col gap-4 font-roboto">
                      {/* <!-- Table Header --> */}

                      {/* <!-- Table Row --> */}
                      <div className="flex flex-col sm:flex-row pt-4">
                        <div className="flex-1 font-semibold text-blue-600">
                          Client
                        </div>
                        <div className="flex-1 mr-2 text-gray-600">
                          {getClientName(selectedProject.client_id)}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-1 font-semibold text-blue-600">
                          Location
                        </div>
                        <div className="flex-1 mr-2 text-gray-600">
                          {selectedProject.location}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-1 font-semibold text-blue-600">
                          Service Type
                        </div>
                        <div className="flex-1 mr-2 text-gray-600">
                          {getServiceName(selectedProject.service_id)}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row">
                        <div className="flex-1 font-semibold text-blue-600">
                          Year Completed
                        </div>
                        <div className="flex-1 mr-2 text-gray-600">
                          {selectedProject.year_completed}
                        </div>
                      </div>

                      {/* <!-- Add more rows as needed --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {selectedProject.service_id ? (
          <RelatedProjects selectedProject={selectedProject} />
        ) : (
          ""
        )}
      </div>
    </section>
  );
};
export default ProjectsDetailsContent;
