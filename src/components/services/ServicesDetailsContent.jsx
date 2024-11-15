import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

const ServicesDetailsContent = () => {
  const { serviceId } = useParams();
  const { gcsData } = useContext(GCSContext);
  const selectedService = gcsData.Services.find(
    (service) => service.service_id === parseInt(serviceId, 10)
  );
  const getServiceName = (serviceId) => {
    const service = gcsData.Services.find(
      (service) => service.service_id === serviceId
    );
    return service ? service.service_name : "Unknown Service";
  };
  return (
    <section className="flex items-center bg-white">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="grid sm:grid-cols-1 lg:grid-cols-7 my-16">
          <div className="flex justify-between items-start col-span-2 ml-4 pb-4">
            <div className=" ml-2 p-8 bg-gray-100">
              <ul className="list-disc marker:text-atlantis-500">
                {/* {console.log("serviceId " + serviceId)}
                {console.log("service_id " + selectedService.service_id)} */}

                {/* {console.log(selectedService.service_id == serviceId)} */}
                {gcsData.Services.map((service) => (
                  <li
                    key={service.service_id}
                    className={`text-blue-500 hover:text-blue-600 ${
                      selectedService?.service_id === service.service_id
                        ? "text-blue-600 font-semibold"
                        : " "
                    } hover:font-semibold py-2`}
                  >
                    <Link to={`/services/${service.service_id}`}>
                      {service.service_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-5">
            <div className="col-span-3">
              <div className="flex bg-gray-100">
                <div className="col-span-2">
                  <div className="pr-8 pl-4">
                    <p className="text-gray-400 py-4 font-semibold">
                      SPECIAL SERVICES
                    </p>
                    <h1 className="text-2xl border-b-2 border-b-atlantis-500 pb-4 font-semibold text-blue-600">
                      {getServiceName(selectedService.service_id)}
                    </h1>
                    <p className="my-4 text-gray-500">
                      {selectedService.description[0].description_overview}
                    </p>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="h-64 w-96 overflow-hidden">
                    <img
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${selectedService.service_image}`}
                      alt=""
                      className="h-72 w-[580px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h1 className="my-4 font-semibold text-blue-600 text-xl">
                Service Consultant
              </h1>
              <p className="text-gray-500">
                Through our Design-Build service, we provides a single source of
                responsibility to the client. We work to develop and understand
                project expectations and then manage those needs with a
                customized, qualified design team. Innovation should happen
                throughout a project. To do that, we focus our efforts on each
                step of every phase to make the entire process smooth and
                straightforward. Our proactive, collaborative approach is what
                uncovers unique ideas and opportunities for improvement before
                the next phase begins.
              </p>
            </div>
            <div className="py-4">
              <h1 className="uppercase mb-4 font-semibold text-blue-600 text-xl">
                Our Services Includes
              </h1>
              <p className="text-gray-500">
                We have successfully completed projects in numerous states
                across the Indonesia. Gemilang Cipta Sentosa Services has a
                proven track record of:
              </p>
              <ul className="list-disc mx-6 my-4 text-gray-500">
                <li className="my-1">Interior Design Planning</li>
                <li className="my-1">Colour & Finish Consultations</li>
                <li className="my-1">Architectural & Custom Lighting</li>
                <li className="my-1">Glass & Acrylic Specifications</li>
              </ul>
            </div>
            {/* <div className="col-span-2"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsContent;
