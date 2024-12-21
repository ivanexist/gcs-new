import { useContext } from "react";
import { Link } from "react-router-dom";
import { GCSContext } from "../../context/GCSContext";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const WelcomeToGCS = () => {
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

  const { scrollToTop } = useContext(GCSContext);
  return (
    <div>
      <motion.div
        variants={variantY}
        initial="hiddenY"
        whileInView="visibleY"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center self-center"
      >
        <h1 className="text-3xl font-bold uppercase mt-16 sm:mb-4 md:mb-12 pb-4 border-b-atlantis-500 border-b-2 text-blue-600">
          CORE VALUE
        </h1>
      </motion.div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 sm:mb-6 lg:mb-20 bg-gray-100">
        <div className="flex sm:mb-8 md:mb-0 sm:flex-col sm:justify-center sm:items-center lg:justify-start lg:items-start">
          <div className="sm:ml-4 lg:ml-12 my-4 text-gray-600">
            <ul className="flex flex-col sm:justify-start sm:items-start self-center list-none text-lg overflow-hidden">
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="my-2 text-blue-600 "
              >
                <b className="text-2xl mr-[2px]">G</b>
                lory{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Bagus
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">E</b>
                xcellent{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Sempurna
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">M</b>
                odest{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Sederhana
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">I</b>
                nnovative{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Inovasi
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">L</b>
                oyal{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Setia
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">A</b>
                ccurate{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Tepat
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">N</b>
                etworking{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Membangun Hubungan
                </span>
              </motion.li>
              <motion.li
                variants={variantX}
                initial="hiddenX"
                whileInView="visibleX"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="my-2 text-blue-600"
              >
                <b className="text-2xl mr-[2px]">G</b>
                rowth{" "}
                <span className="text-atlantis-500 sm:hidden lg:inline">
                  - Bertumbuh
                </span>
              </motion.li>
            </ul>
          </div>
          <motion.div
            variants={variant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center items-center self-center mx-8 my-4"
          >
            <Link to={`/contact`} onClick={scrollToTop}>
              <button className="px-8 py-4 bg-atlantis-500 hover:bg-atlantis-400 font-semibold text-white rounded-lg shadow-md">
                GET IN TOUCH
              </button>
            </Link>
          </motion.div>
        </div>
        <div>
          <img
            className="relative md:w-[500px] md:h-[500px] sm:w-full sm:h-full sm:p-4 rounded-full sm:hidden lg:block"
            src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/gcs.jpg"
            alt="GCS Logo"
          />
        </div>
      </div>
    </div>
  );
};
export default WelcomeToGCS;
