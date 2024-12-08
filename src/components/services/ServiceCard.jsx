import { useContext } from "react";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { GCSContext } from "../../context/GCSContext";

const ServiceCard = ({ service, serviceId }) => {
  const { scrollToTop } = useContext(GCSContext);
  return (
    <Link
      key={serviceId}
      to={`/services/${serviceId}`}
      onClick={scrollToTop}
      className="transition-all rounded-lg duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl lg:m-2 p-4 relative z-10 group sm:mx-4"
    >
      <div className=" absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-20 transition-all duration-200 group-hover:bg-white group-hover:w-1/2  "></div>
      <div className="py-2 sm:px-4 lg:px-8 relative group">
        <div className="sm:flex sm:justify-center sm:items-center lg:justify-start lg:items-start my-2">
          <ReactSVG
            className="w-24 h-24 group-hover:text-white text-blue-500 transition-colors duration-300 "
            src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.service_icon}`}
          />
        </div>
        <h3 className="mt-8 text-lg font-semibold text-blue-600 group-hover:text-white ">
          {service.service_name}
        </h3>
        <p className="mt-4 text-base text-gray-600 group-hover:text-white text-left">
          {service.description[0].description_overview}
        </p>
      </div>
    </Link>
  );
};
export default ServiceCard;
