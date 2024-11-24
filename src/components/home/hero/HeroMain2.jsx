import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/autoplay";
const HeroMain2 = () => {
  const slides = [
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Hilite-2.jpeg",
    },
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Side-1.jpg",
    },
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Barak-Siswa-Lantamal-VI/Side-2.jpg",
    },
  ];
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static Text */}
      <motion.div
        className="absolute grid grid-cols-4 gap-4 mx-auto max-w-screen-xlz-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="sm:col-span-1 lg:col-span-2 sm:my-20 md:my-40 pr-2">
          <div className="sm:hidden lg:block">
            <div className="flex sm:justify-center sm:items-center lg:justify-start lg:items-start my-2">
              <h1 className="font-semibold text-lg uppercase text-blumine-950">
                New Arrivals
              </h1>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="w-full my-4 flex sm:justify-center lg:justify-start text-3xl lg:text-4xl font-bold uppercase sm:text-center lg:text-left text-blumine-950"
            >
              <p>Notre Dame Cathedral</p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              exit={{ opacity: 0 }}
              className="w-full mb-4 mt-2 lg:my-8 flex lg:justify-start lg:text-left text-base text-blumine-950"
            >
              <p>
                Since its construction, Notre Dame Cathedral has played a
                central role in French cultural identity.{" "}
                <span className="sm:hidden lg:inline">
                  In the wake of the tragic fire of 2019, questions of how to
                  restore the fabric of this quintessential French monument are
                  once more at the forefront.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
        {/* <div className="sm:text-center lg:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            KOMITMEN UNTUK BERSINERGI SEBAIK MUNGKIN
          </h1>
          <p className="sm:text-justify md:text-left text-lg md:text-2xl mt-4 text-black">
            Dengan sumber daya dan relasi yang luas, kami siap bersinergi
            menawarkan solusi kerjasama yang produktif serta kemitraan yang
            harmonis untuk menghasilkan karya yang bermanfaat dan berkualitas.
          </p>
        </div> */}
      </motion.div>
    </div>
  );
};
export default HeroMain2;
