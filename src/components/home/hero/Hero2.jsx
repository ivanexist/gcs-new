import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => (
  <section className=" bg-[linear-gradient(to_left,rgba(255,255,255,0.4),rgba(255,255,255,0.7)),url(../../../../public/images/Side-1.jpg)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
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
        <div className="sm:col-span-1 lg:col-span-2 sm:my-20 md:my-40 pr-2">
          <div className="sm:hidden lg:block">
            <div className="flex sm:justify-center sm:items-center lg:justify-start lg:items-start my-2">
              {/* <h1 className="font-semibold text-lg uppercase text-blumine-950">
                New Arrivals
              </h1> */}
            </div>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // transition={{ duration: 1, delay: 1.3 }}
              className="w-full m-4 flex sm:justify-center lg:justify-start text-3xl lg:text-4xl font-bold uppercase sm:text-center lg:text-left text-blumine-950"
            >
              <p className="uppercase text-blue-600">
                PT Gemilang Cipta Sentosa
              </p>
            </motion.div>
            <motion.div
              // initial={{ x: 100, opacity: 0 }}
              // animate={{ x: 0, opacity: 1 }}
              // transition={{ duration: 0.8, delay: 1.7 }}
              // exit={{ opacity: 0 }}
              className="w-full mx-4 mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-lg "
            >
              <p>
                Perusahaan yang berdiri pada tahun 2014 dan bergerak dalam
                bidang konstruksi Sipil Bangunan, Jetty/Dermaga serta Pemasangan
                Instalasi Perpipaan.
                {/* <span className="sm:hidden lg:inline">
                  serta kemitraan yang harmonis untuk menghasilkan karya yang
                  bermanfaat dan berkualitas.
                </span> */}
              </p>
            </motion.div>

            <motion.div
            // initial={{ y: -100, opacity: 0 }}
            // exit={{ opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{
            //   delay: 2.4,
            //   type: "tween",
            //   stiffness: 110,
            //   duration: 1,
            // }}
            >
              {/* <div className="lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 text-lg font-semibold  justify-center flex hover:text-white hover:bg-blumine-950 transition duration-300">
                <Link to="/shop">
                  <p>Shop Now</p>
                </Link>
              </div> */}
            </motion.div>
          </div>
        </div>

        <div className="flex-col sm:my-32 md:my-36 pr-2 col-span-2 sm:flex">
          <div className="sm:flex lg:hidden sm:justify-center sm:items-center my-2">
            <h1 className="font-semibold text-lg uppercase text-blumine-950">
              New Arrivals
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="w-full my-4 flex  lg:justify-start sm:text-2xl lg:text-4xl font-semibold uppercase text-center lg:text-left text-blumine-950 lg:hidden "
          >
            <p>Notre Dame Cathedral</p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            exit={{ opacity: 0 }}
            className="w-full mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-base text-blumine-950 lg:hidden "
          >
            <p>
              Since its construction, Notre Dame Cathedral has played a central
              role in French cultural identity.{" "}
              <span className="sm:hidden lg:inline">
                In the wake of the tragic fire of 2019, questions of how to
                restore the fabric of this quintessential French monument are
                once more at the forefront.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: -100, opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2.4,
              type: "tween",
              stiffness: 110,
              duration: 1,
            }}
          >
            <div className="lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 text-lg font-semibold justify-center flex hover:text-white hover:bg-blumine-950 lg:hidden transition duration-300">
              <Link href="/shop">
                <p>Shop Now</p>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
    {/* <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8"></div> */}
  </section>
);

export default Hero2;
