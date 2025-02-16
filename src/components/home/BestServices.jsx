// import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import ServiceCard from "../services/ServiceCard";
import BestServiceCard from "../services/BestServiceCard";

export default function BestServices() {
  const variantX = {
    hiddenX: { x: 100, opacity: 0 },
    visibleX: { x: 0, opacity: 1 },
  };
  const variantY = {
    hiddenY: { y: 100, opacity: 0 },
    visibleY: { y: 0, opacity: 1 },
  };
  const variant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
            <p className="font-bold my-4 mb-12 text-blue-600 text-3xl font-PlayfairDisplay">
              BEST SERVICES
            </p>
          </motion.div>
        </div>
        <div>
          <motion.div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <button className="py-4 px-8 bg-atlantis-500 hover:bg-atlantis-400 text-white font-semibold text-xl rounded-lg">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
