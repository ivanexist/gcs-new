import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { div } from "framer-motion/client";

const WelcomeToGCS = () => {
  const { scrollToTop } = useContext(GCSContext);
  return (
    <div>
      <div className="flex justify-center items-center self-center">
        <h1 className="text-3xl font-bold uppercase mt-16 sm:mb-4 md:mb-12 pb-4 border-b-atlantis-500 border-b-2 text-blue-600">
          CORE VALUE
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 mb-20 bg-gray-100">
        <div className="flex sm:mb-8 md:mb-0 sm:flex-col justify-start items-start">
          <div className="sm:ml-12 my-4 text-gray-600">
            <ul className="flex flex-col sm:justify-start sm:items-start self-center list-none text-lg">
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">G</b>
                lory - <span className="text-atlantis-500">Bagus</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">E</b>
                xcellent - <span className="text-atlantis-500">Sempurna</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">M</b>
                odest - <span className="text-atlantis-500">Sederhana</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">I</b>
                nnovative - <span className="text-atlantis-500">Inovasi</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">L</b>
                oyal - <span className="text-atlantis-500">Setia</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">A</b>
                ccurate - <span className="text-atlantis-500">Tepat</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">N</b>
                etworking -{" "}
                <span className="text-atlantis-500">Membangun Hubungan</span>
              </li>
              <li className="my-2 text-blue-600">
                <b className="text-2xl mr-[2px]">G</b>
                rowth - <span className="text-atlantis-500">Bertumbuh</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center self-center mx-8 my-4 ">
            <Link to={`/contact`} onClick={scrollToTop}>
              <button className="px-8 py-4 bg-atlantis-500 hover:bg-atlantis-400 font-semibold text-white rounded-lg shadow-md">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="relative md:w-[500px] md:h-[500px] sm:w-full sm:h-full sm:p-4 rounded-full"
            src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/gcs.jpg"
            alt="GCS Logo"
          />
        </div>
      </div>
    </div>
  );
};
export default WelcomeToGCS;
