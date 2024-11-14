import { Fragment, useContext, useState } from "react";
import ProjectDetailsCard from "./ProjectDetailsCard";
import { GCSContext } from "../../context/GCSContext";
import { useParams } from "react-router-dom";
import RelatedProjects from "./RelatedProjects";

const ProjectsDetailsContent = ({ selectedProject, selectedProjectId }) => {
  const { gcsData, formatTextWithBreaks } = useContext(GCSContext);
  const { projectId } = useParams();

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
    <section className="flex items-center bg-white">
      <div className="justify-center flex-1 max-w-7xl mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-4">
            <div className="max-w-screen-xl mx-auto">
              {/* Main Slideshow Image */}
              <div className="relative w-full h-[480px]">
                <img
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${selectedProject.images[currentIndex]}`}
                  alt="slide"
                  className="w-full h-full object-cover object-center shadow-lg"
                />
                {/* Left & Right Navigation */}
                <button
                  onClick={goToPrevious}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2  hover:bg-gray-700"
                >
                  ❮
                </button>
                <button
                  onClick={goToNext}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2  hover:bg-gray-700"
                >
                  ❯
                </button>
              </div>
              {/* Thumbnail Selector */}
              <div className="flex justify-center mt-4 space-x-2">
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
                      className="w-full h-52 object-cover"
                    />
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 my-16">
                <div className="col-span-2">
                  <div className="mr-16">
                    <h1 className="text-xl font-semibold text-blue-600 py-4">
                      Project Description
                    </h1>
                    <p className="py-2 text-gray-600 text-justify">
                      The ten-storey, 325,000 SF Krembil Discovery Centre
                      provides the Toronto Western Hospital with a new research
                      and rehabilitation facility. The Integrated Project
                      Delivery contract included the base building core and
                      shell (and associated functional space), interior fit-up
                      of two floors of the rehab solutions space, two floors of
                      wet labs, a single floor vivarium and the associated
                      interstitial floor Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Neque, nihil. Deserunt illum sit nisi
                      nobis temporibus aspernatur veritatis veniam atque.
                      <span>
                        {formatTextWithBreaks(selectedProject.description)}
                      </span>
                    </p>
                    {/* <p className="py-2 text-gray-600  text-justify">
                      From November 2013 to April 2014, EllisDon was awarded an
                      additional Lump Sum contract for $5 million. This
                      additional scope of work included a lab fit- up on the
                      fourth level of the Krembil Discovery Centre. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Cumque
                      voluptatem quis totam soluta veritatis aspernatur rem quo,
                      doloremque ipsa iure culpa, vitae perferendis sunt. A
                      excepturi placeat laborum ea eligendi consequatur
                      deleniti! Quidem quo sit nostrum tempora numquam dolor
                      perspiciatis obcaecati ad esse veritatis corporis rem
                      sint, praesentium at quibusdam dolorem temporibus non
                      nemo. Perspiciatis autem nemo soluta maiores quos illum
                      repellat laboriosam optio! Quidem quasi iure recusandae
                      laboriosam quod voluptas omnis provident architecto? Natus
                      deleniti ratione consectetur nulla cupiditate.
                    </p> */}
                  </div>
                </div>
                <div className="col-span-1 my-4">
                  <h1 className="font-semibold text-xl border-b-2 border-b-atlantis-500 text-blue-600 pb-4 uppercase">
                    {selectedProject.project_name}
                  </h1>
                  <div className="container mx-auto my-4">
                    <div className="flex flex-col gap-4">
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
