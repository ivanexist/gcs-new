import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { GCSContext } from "../../context/GCSContext";

const ServiceCard = ({ service, serviceId, indexMotion }) => {
  const { scrollToTop } = useContext(GCSContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="rounded-lg bg-white hover:bg-blue-500 hover:shadow-xl lg:m-2 p-4 relative z-10 group sm:mx-4 w-96 h-[25rem] mb-4"
    >
      <Link
        key={serviceId}
        to={`/services/${serviceId}`}
        onClick={scrollToTop}
        // transition={{ duration: 1, delay: 0.8 + indexMotion * 0.2 }}
      >
        <div className=" absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-20 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
        <div className="py-2 sm:px-4 lg:px-8 relative group">
          <div className="sm:flex sm:justify-center sm:items-center lg:justify-start lg:items-start my-2">
            <ReactSVG
              className="w-24 h-24 group-hover:text-white text-blue-500 transition-colors duration-300"
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.service_icon}`}
            />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-blue-600 group-hover:text-white ">
            {service.service_name}
          </h3>
          <p className="mt-4 text-base text-gray-600 group-hover:text-white text-left font-roboto">
            {service.description[0].description_overview}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
export default ServiceCard;
