import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import { GCSContext } from "../../context/GCSContext";

const BestServiceCard = ({ service, serviceId, indexMotion }) => {
  const { scrollToTop } = useContext(GCSContext);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="rounded-lg bg-white hover:bg-blue-500 hover:shadow-xl lg:m-2 p-4 relative z-10 group sm:mx-4 w-96 h-[18rem] mb-4"
    >
      <Link key={serviceId} to={`/services/${serviceId}`} onClick={scrollToTop}>
        <div className=" absolute bg-blue-500/50 top-0 left-0 w-24 h-1 z-20 transition-all duration-200 group-hover:bg-white group-hover:w-1/2"></div>
        <div className="py-2 sm:px-4 lg:px-8 relative group my-4">
          <div className="sm:flex sm:justify-center sm:items-center my-2">
            <ReactSVG
              className="w-28 h-28 group-hover:text-white text-center text-blue-500 transition-colors duration-300 "
              src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/icon/${service.service_icon}`}
            />
          </div>
          <h3 className="mt-12 text-xl font-bold text-blue-600 group-hover:text-white text-center uppercase">
            {service.service_name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
};
export default BestServiceCard;
