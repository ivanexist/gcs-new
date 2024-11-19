"use client";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";

const SlideWithMotion = ({ isVisible, children }) => {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      image:
        "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const HeroMain = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
  };
  return (
    <div className="swiper-container relative">
      {/* <div className="flex justify-between absolute bg-transparent">
        <Navbar2 />
      </div> */}
      <div className="swiper-wrapper">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
        >
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 0}>
              <Hero1 />
            </SlideWithMotion>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 1}>
              <Hero2 />
            </SlideWithMotion>
          </SwiperSlide>
          <SwiperSlide>
            <SlideWithMotion isVisible={currentIndex === 2}>
              <Hero3 />
            </SlideWithMotion>
          </SwiperSlide>
        </Swiper>

        <div className=" grid grid-cols-4 gap-4 mx-auto max-w-screen-xl absolute inset-0  items-center justify-center z-10">
          {/* <div className="sm:col-span-1 lg:col-span-2"></div> */}
          <div className="flex flex-col sm:my-20 md:my-36 pr-2 col-span-2">
            <div className="flex justify-center items-center lg:justify-start lg:items-start my-2">
              {/* <h1 className="font-semibold text-lg uppercase text-blumine-950">
              New Arrivals
            </h1> */}
            </div>
            <motion.div className="w-full m-4 flex lg:justify-start text-2xl lg:text-4xl font-bold uppercase text-center lg:text-left text-blue-600">
              <p>KOMITMEN UNTUK BERSINERGI SEBAIK MUNGKIN</p>
            </motion.div>
            <motion.div className="w-full mx-4 mb-4 mt-2 flex lg:justify-start lg:text-left text-lg font-semibold text-gray-800">
              <p>
                Dengan sumber daya dan relasi yang luas, kami siap bersinergi
                menawarkan solusi kerjasama yang produktif
                <span className="sm:hidden lg:inline">
                  {" "}
                  serta kemitraan yang harmonis untuk menghasilkan karya yang
                  bermanfaat dan berkualitas.
                </span>
              </p>
            </motion.div>

            <motion.div className="flex justify-center items-center lg:justify-end lg:items-end lg:text-right"></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroMain;
