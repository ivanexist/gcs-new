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
                <div className="pr-8 pl-4">
                  <p className="text-gray-400 py-4 font-semibold">
                    SPECIAL SERVICES
                  </p>
                  <h1 className="text-2xl border-b-2 border-b-atlantis-500 pb-4 font-semibold text-blue-600">
                    {getServiceName(selectedService.service_id)}
                  </h1>
                  <p className="my-4 text-gray-500">
                    We work to develop and understand project expectations and
                    then manage those needs with a customized, qualified design
                    team. Innovation should happen throughout a project
                  </p>
                </div>
                <div>
                  <img
                    src="../../../public/images/Rumneg-T45-Lantamal-V/Proses.jpeg"
                    alt=""
                    className="h-full w-full"
                  />
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

            <div>
              <h1 className="uppercase mb-4 font-semibold text-blue-600 text-xl">
                Contact Us for House Construction Services Today
              </h1>
              <div className="flex ">
                {/* <!-- Sidebar Tabs --> */}
                <div className="flex flex-col w-1/4 bg-gray-100 p-4 space-y-2">
                  <button className="px-4 py-2 text-left rounded-md hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
                    Our Focus
                  </button>
                  <button className="px-4 py-2 text-left rounded-md hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
                    Dedicated
                  </button>
                  <button className="px-4 py-2 text-left rounded-md hover:bg-gray-200 focus:bg-blue-500 focus:text-white">
                    Commited
                  </button>
                </div>

                {/* <!-- Tab Content --> */}
                <div>
                  <div className="p-4">
                    <div className="content">
                      {/* <h1 className="text-2xl font-semibold">Tab Content</h1> */}
                      <p className=" text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. <br />
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Neque porro quisquam est, qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailsContent;
