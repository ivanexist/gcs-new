import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero2 = () => (
  <section className=" bg-[url(https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Side-1.jpg)] bg-cover bg-center bg-no-repeat sm:h-[40rem] lg:h-[40rem]">
    <motion.div>
      <div className="grid grid-cols-4 gap-4 mx-auto max-w-screen-xl">
        <div className="sm:col-span-1 lg:col-span-2 sm:my-20 md:my-40 pr-2">
          <div className="sm:hidden lg:block">
            <div className="flex sm:justify-center sm:items-center lg:justify-start lg:items-start my-2">
              {/* <h1 className="font-semibold text-lg uppercase text-blumine-950">
                New Arrivals
              </h1> */}
            </div>
            <motion.div className="w-full m-4 flex sm:justify-center lg:justify-start text-3xl lg:text-4xl font-bold uppercase sm:text-center lg:text-left text-blumine-950">
              {/* <p className="uppercase text-blue-600">
                PT Gemilang Cipta Sentosa
              </p> */}
            </motion.div>
            <motion.div className="w-full mx-4 mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-lg "></motion.div>

            <motion.div>
              {/* <div className="lg:w-1/3 cursor-pointer py-3 px-6 my-8 border-2 text-blumine-950 border-blumine-950 text-lg font-semibold  justify-center flex hover:text-white hover:bg-blumine-950 transition duration-300">
                <Link to="/shop">
                  <p>Shop Now</p>
                </Link>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    {/* <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 justify-center flex flex-col lg:h-screen lg:px-8"></div> */}
  </section>
);

export default Hero2;
