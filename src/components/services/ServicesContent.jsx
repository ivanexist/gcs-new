import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

const ServicesContent = () => {
  const { gcsData, scrollToTop } = useContext(GCSContext);
  return (
    <section className="flex items-center bg-white">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6 my-12">
        <div className="flex flex-col">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Best Quality */}
            {gcsData.Services.length > 0 ? (
              gcsData.Services.map((service) => (
                <div key={service.service_id} className="flex flex-col">
                  <div className="flex justify-center items-center">
                    <img
                      src={`../../../public/images/${service.service_image}`}
                      alt={service.service_name}
                      className="w-96 h-64"
                    />
                  </div>
                  <div className="my-2 font-semibold text-blue-600">
                    <p>{service.service_name}</p>
                  </div>
                  <div className="text-gray-600">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa, quia officiis facere [...]
                  </div>
                  <div className="flex my-4">
                    {/* <a href="">Details</a> */}
                    <Link
                      className=" text-atlantis-500 hover:text-atlantis-400 font-semibold"
                      to={`/services/${service.service_id}`}
                      onClick={scrollToTop}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="grid col-span-5 h-screen place-content-center bg-white px-4">
                <h1 className="uppercase tracking-widest font-bold text-4xl text-blumine-900">
                  Product Not Found
                </h1>
              </div>
            )}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`../../../public/images/Proses-2.jpeg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>Street Construction</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex my-4">
                <Link
                  className=" text-atlantis-500 hover:text-atlantis-400 font-semibold"
                  to="/services/details"
                  onClick={scrollToTop}
                >
                  Details
                </Link>
              </div>
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`../../../public/images/Hilite-2.jpeg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>House Construction</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex  text-atlantis-500 font-semibold my-4">
                <Link to="/services/details" onClick={scrollToTop}>
                  Details
                </Link>
              </div>
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`../../../public/images/Pipa-3.jpg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>Pipe Installation</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex  text-atlantis-500 font-semibold my-4">
                <Link to="/services/details" onClick={scrollToTop}>
                  Details
                </Link>
              </div>
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`../../../public/images/Gedung-1.jpeg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>Building Construction</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex  text-atlantis-500 font-semibold my-4">
                <Link to="/services/details" onClick={scrollToTop}>
                  Details
                </Link>
              </div>
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`../../../public/images/konstruksi-baja.jpg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>Steel Construction</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex  text-atlantis-500 font-semibold my-4">
                <Link to="/services/details" onClick={scrollToTop}>
                  Details
                </Link>
                <a href="">Details</a>
              </div>
            </div> */}
            {/* <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`https://cdn.pixabay.com/photo/2017/07/04/14/30/drainage-pipes-2471293_960_720.jpg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div className="my-2 font-semibold text-blue-600">
                <p>Drainage System</p>
              </div>
              <div className="text-gray-600">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa,
                quia officiis facere [...]
              </div>
              <div className="flex  text-atlantis-500 font-semibold my-4">
                <Link to="/services/details" onClick={scrollToTop}>
                  Details
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesContent;
