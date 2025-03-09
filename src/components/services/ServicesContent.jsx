import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { ReactSVG } from "react-svg";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

const ServicesContent = () => {
  const { gcsData, scrollToTop } = useContext(GCSContext);
  return (
    <section className="flex items-center">
      <div className="justify-center flex-1 max-w-7xl sm:py-0 mx-4 mb-20">
        <motion.div
          initial="hiddenY"
          whileInView="visibleY"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-medium my-4 mb-8 pb-2 text-blue-600 text-2xl font-PlayfairDisplay border-b border-b-malachite-600 w-fit text-center mx-auto">
            OUR SERVICES
          </h1>
          <p className="font-bold my-4 mb-12 text-blue-700 text-4xl font-PlayfairDisplay">
            Build Your Dreams Constructing Excellence Foundation
          </p>
        </motion.div>
        <div className="flex flex-col">
          <div className="grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8 text-blue-600">
            {/* Best Quality */}
            {gcsData.Services.length > 0 ? (
              gcsData.Services.map((service) => (
                <ServiceCard
                  key={service.service_id}
                  service={service}
                  serviceId={service.service_id}
                  // indexMotion={indexMotion}
                />
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
