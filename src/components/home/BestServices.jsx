// import Image from "next/image";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";

export default function BestServices() {
  const { scrollToTop, gcsData } = useContext(GCSContext);
  const ArraySlice3 = gcsData.Services || [];

  return (
    <div>
      <div className="flex flex-col pt-4 pb-8">
        <div className="flex justify-center items-center">
          <div>
            <p className="font-bold my-4 mb-16 text-blue-600 text-2xl">
              BEST SERVICES
            </p>
          </div>
        </div>
        <div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
            {/* Best Quality */}
            {ArraySlice3.slice(0, 3).map((service) => (
              <div key={service.service_id} className="flex flex-col">
                <Link
                  to={`/services/${service.service_id}`}
                  onClick={scrollToTop}
                  className="sm:mx-4 md:mx-0"
                >
                  <div className="flex justify-center items-center">
                    <img
                      src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/${service.service_image}`}
                      alt="Street constructions"
                      className="w-96 h-64"
                    />
                  </div>
                  <div>
                    <p className="font-semibold my-4 text-xl text-blue-600">
                      {service.service_name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center my-12 ">
            <Link to="/services" onClick={scrollToTop}>
              <button className="py-4 px-8 bg-atlantis-500 text-white font-semibold text-lg">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
