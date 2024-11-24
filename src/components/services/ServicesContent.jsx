import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { ReactSVG } from "react-svg";

const ServicesContent = () => {
  const { gcsData, scrollToTop } = useContext(GCSContext);
  return (
    <section className="flex items-center">
      <div className="justify-center flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-col">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 text-blue-600">
            {/* Best Quality */}
            {gcsData.Services.length > 0 ? (
              gcsData.Services.map((service) => (
                // <div
                //   key={service.service_id}
                //   className="flex flex-col rounded-lg bg-white p-4 shadow-lg hover:shadow-2xl"
                // >
                //   <div className="flex justify-center items-center">
                //     <img
                //       src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.service_image}`}
                //       alt={service.service_name}
                //       className="w-96 h-64"
                //     />
                //     <ReactSVG
                //       src={`../../../public/icon/road-construction.svg`}
                //     />
                //   </div>
                //   <div className="my-2 font-semibold text-blue-600">
                //     <p>{service.service_name}</p>
                //   </div>
                //   <div className="text-gray-600 text-justify">
                //     {service.description[0].description_overview.length > 75
                //       ? `${service.description[0].description_overview.substring(
                //           0,
                //           75
                //         )}[...]`
                //       : service.description[0].description_overview}
                //   </div>
                //   <div className="flex my-4">
                //     <Link
                //       className=" text-atlantis-500 hover:text-atlantis-400 font-semibold"
                //       to={`/services/${service.service_id}`}
                //       onClick={scrollToTop}
                //     >
                //       Details
                //     </Link>
                //   </div>
                // </div>
                <Link
                  key={service.service_id}
                  to={`/services/${service.service_id}`}
                  onClick={scrollToTop}
                  className="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-10 group"
                >
                  <div className=" absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-20 transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
                  <div className="py-2 px-8 relative group">
                    <ReactSVG
                      className="w-20 h-20 group-hover:text-white text-blue-500 transition-colors duration-300"
                      src={`../../../public/icon/${service.service_icon}`}
                    />
                    <h3 className="mt-8 text-lg font-semibold text-blue-600 group-hover:text-white ">
                      {service.service_name}
                    </h3>
                    <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                      {service.description[0].description_overview}
                    </p>
                  </div>
                </Link>
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

            {/*  */}
            {/* <div
              className="flex justify-center items-center min-h-screen"
              key={service.service_id}
            >
              <div className="max-w-[720px] mx-auto">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 hover:shadow-xl shadow-lg">
                  <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                    <img
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.service_image}`}
                      alt={service.service_name}
                    />
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-600">
                        {service.service_name}
                      </h5>
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
                      {service.description[0].description_overview.length > 75
                        ? `${service.description[0].description_overview.substring(
                            0,
                            75
                          )}[...]`
                        : service.description[0].description_overview}
                    </p>

                    <Link
                      className=" text-atlantis-500 hover:text-atlantis-400 font-semibold"
                      to={`/services/${service.service_id}`}
                      onClick={scrollToTop}
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesContent;
