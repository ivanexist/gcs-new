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
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Flat-T45-Marinir/Side-1.jpg",
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
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            KOMITMEN UNTUK BERSINERGI SEBAIK MUNGKIN
          </h1>
          <p className="sm:text-justify md:text-start text-lg md:text-2xl mt-4 text-black">
            Dengan sumber daya dan relasi yang luas, kami siap bersinergi
            menawarkan solusi kerjasama yang produktif serta kemitraan yang
            harmonis untuk menghasilkan karya yang bermanfaat dan berkualitas.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default HeroMain2;
