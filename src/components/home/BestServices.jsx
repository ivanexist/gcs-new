// import Image from "next/image";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import ServiceCard from "../services/ServiceCard";

export default function BestServices() {
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const ArraySlice3 = gcsData.Services || [];

  return (
    <div>
      <div className="flex flex-col pt-4 pb-8">
        <div className="flex justify-center items-center">
          <div>
            <p className="font-bold my-4 mb-12 text-blue-600 text-3xl">
              BEST SERVICES
            </p>
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Best Quality */}
            {ArraySlice3.slice(0, 3).map((service) => (
              <ServiceCard
                key={service.service_id}
                service={service}
                serviceId={service.service_id}
              />
            ))}
          </div>
          <div className="flex justify-center items-center my-12 ">
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
