import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero1 = () => (
  <section className="bg-[linear-gradient(to_left,rgba(255,255,255,0.4),rgba(255,255,255,0.8)),url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Hilite-2.jpeg)] bg-cover bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
    {/* <img src="../../../../public/images/" alt="" /> */}
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
    >
      <div className=" grid grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        {/* <div className="sm:col-span-1 lg:col-span-2"></div> */}
        <div className="flex flex-col sm:my-20 md:my-36 pr-2 col-span-2">
          <div className="flex justify-center items-center lg:justify-start lg:items-start my-2">
            {/* <h1 className="font-semibold text-lg uppercase text-blumine-950">
              New Arrivals
            </h1> */}
          </div>
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1, delay: 1.3 }}
            // exit={{ opacity: 0 }}
            className="w-full m-4 flex lg:justify-start text-2xl lg:text-4xl font-bold uppercase text-center lg:text-left text-blue-600"
          >
            <p>KOMITMEN UNTUK BERSINERGI SEBAIK MUNGKIN</p>
          </motion.div>
          <motion.div
            // initial={{ x: -200, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // transition={{ duration: 0.8, delay: 1.7 }}
            // exit={{ opacity: 0 }}
            className="w-full mx-4 mb-4 mt-2 flex lg:justify-start lg:text-left text-lg"
          >
            <p>
              Dengan sumber daya dan relasi yang luas, kami siap bersinergi
              menawarkan solusi kerjasama yang produktif
              <span className="sm:hidden lg:inline">
                serta kemitraan yang harmonis untuk menghasilkan karya yang
                bermanfaat dan berkualitas.
              </span>
            </p>
          </motion.div>

          <motion.div
            // initial={{ y: -100, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{
            //   delay: 2.4,
            //   type: "tween",
            //   stiffness: 110,
            //   duration: 1,
            // }}
            // exit={{ opacity: 0 }}
            className="flex justify-center items-center lg:justify-end lg:items-end lg:text-right"
          >
            {/* <div className="flex lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 text-lg font-semibold  justify-center  hover:text-white hover:bg-blumine-950 hover:border-blumine-950 transition duration-300">
              <Link to="/shop">
                <p>Shop Now</p>
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
    </motion.div>
    {/* <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8"></div> */}
  </section>
);

export default Hero1;
