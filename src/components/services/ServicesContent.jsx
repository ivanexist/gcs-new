import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { ReactSVG } from "react-svg";
import ServiceCard from "./ServiceCard";

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
                <ServiceCard
                  key={service.service_id}
                  service={service}
                  serviceId={service.service_id}
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
