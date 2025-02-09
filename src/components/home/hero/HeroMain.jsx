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
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
          }}
          initialSlide={0}
          loop={true}
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
      </div>
    </div>
  );
};
export default HeroMain;
