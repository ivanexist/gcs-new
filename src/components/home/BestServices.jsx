// import Image from "next/image";

import { Link } from "react-router-dom";

export default function BestServices() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
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
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Proses-2.jpeg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                  // height={300}
                  // width={500}
                />
              </div>
              <div>
                <p className="font-semibold my-4 text-xl text-blue-600">
                  Street Construction
                </p>
              </div>
              {/* <div>
                <p className="text-gray-500 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, quia officiis facere ullam laborum error veritatis
                  illum. Cumque, voluptas consequuntur!
                </p>
              </div> */}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Hilite-2.jpeg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div>
                <p className="font-semibold text-xl my-4 text-blue-600">
                  House Constructions
                </p>
              </div>
              {/* <div>
                <p className="text-gray-500 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, quia officiis facere ullam laborum error veritatis
                  illum. Cumque, voluptas consequuntur!
                </p>
              </div> */}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img
                  src={`https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pipa-3.jpg`}
                  alt="Street constructions"
                  className="w-96 h-64"
                />
              </div>
              <div>
                <p className="font-semibold my-4 text-xl text-blue-600">
                  Pipe Installation
                </p>
              </div>
              {/* <div>
                <p className="text-gray-500 text-justify">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa, quia officiis facere ullam laborum error veritatis
                  illum. Cumque, voluptas consequuntur!
                </p>
              </div> */}
            </div>
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
