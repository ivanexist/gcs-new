// import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import ServiceCard from "../services/ServiceCard";
import BestServiceCard from "../services/BestServiceCard";

export default function BestServices() {
  const variantY = {
    hiddenY: { y: 100, opacity: 0 },
    visibleY: { y: 0, opacity: 1 },
  };
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const ArraySlice3 = gcsData.Services || [];

  return (
    <div>
      <div className="flex flex-col pt-4 pb-8 overflow-hidden">
        <div className="flex justify-center items-center">
          <motion.div
            variants={variantY}
            initial="hiddenY"
            whileInView="visibleY"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-medium my-4 mb-8 pb-2 text-blue-600 text-2xl font-PlayfairDisplay border-b border-b-malachite-600 w-fit text-center mx-auto">
              BEST SERVICES
            </h1>
            <motion.p
              variants={variantY}
              initial="hiddenY"
              whileInView="visibleY"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-bold my-4 mb-12 text-blue-700 sm:text-2xl lg:text-4xl font-PlayfairDisplay"
            >
              Build Your Dreams Constructing Excellence Foundation
            </motion.p>
          </motion.div>
        </div>
        <div>
          <motion.div className="grid sm:grid-cols-1 sm:place-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Best Quality */}
            {ArraySlice3.slice(0, 3).map((service) => (
              <BestServiceCard
                key={service.service_id}
                service={service}
                serviceId={service.service_id}
              />
            ))}
          </motion.div>
          <div className="flex justify-center items-center my-12">
            <Link to="/services" onClick={scrollToTop}>
              <button className="py-4 px-8 bg-malachite-600 hover:bg-malachite-500 text-white font-semibold text-xl rounded-lg">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
