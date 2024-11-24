import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero3 = () => (
  <section className=" bg-[url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-2-jalan.jpeg)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
    {/* <img
      src="../../../../public/images/Gedung-Flat-T45-Marinir/Side-1.jpg"
      alt=""
    /> */}
    <motion.div
    // initial={{ y: -100, opacity: 0 }}
    // animate={{ y: 0, opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{
    //   duration: 0.7,
    //   delay: 0.5,
    //   type: "spring",
    //   stiffness: 100,
    // }}
    ></motion.div>
    {/* <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8"></div> */}
  </section>
);

export default Hero3;
