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
                <Link
                  key={service.service_id}
                  to={`/services/${service.service_id}`}
                  onClick={scrollToTop}
                  className="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-10 group"
                >
                  <div className=" absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-20 transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
                  <div className="py-2 px-8 relative group">
                    <div className="my-2">
                      <ReactSVG
                        className="w-32 h-32 group-hover:text-white text-blue-500 transition-colors duration-300"
                        src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.service_icon}`}
                      />
                    </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServicesContent;
