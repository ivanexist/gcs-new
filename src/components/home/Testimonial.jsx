import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Navigation, Pagination } from "swiper/modules";

const clients = [
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/tni-al.jpg",
    alt: "TNI AL",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pelindo_energi_log.jpg",
    alt: "Pelindo Energi Logistik",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/pt-terminal-teluk-lamong.jpg",
    alt: "PT Terminal Teluk Lamong",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/peti_kemas_logo.jpg",
    alt: "Terminal Peti Kemas Surabaya",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/lamong-energi-logo.jpg",
    alt: "PT Lamong Energi Indonesia",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/BMS.png",
    alt: "PT Berlian Manyar Sejahtera",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Disfaslanal.png",
    alt: "Disfaslanal",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodiklatal.jpg",
    alt: "Kodiklatal",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Kodikmar.png",
    alt: "Kodikmar",
  },
  {
    src: "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/clients/Lantamal V.png",
    alt: "Lantamal V",
  },
];

const Testimonial = () => {
  // Variants for the flipping animation
  const flipVariants = {
    hover: {
      rotateY: [0, 180, 360], // 3 flips
      transition: {
        duration: 1, // Adjust duration
        ease: "easeInOut", // Smooth ease effect
      },
    },
    initial: {
      rotateY: 0, // Initial state
    },
  };
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex-1 max-w-7xl py-4 mx-auto lg:py-6 md:px-6 overflow-hidden lg:mb-12">
          <div className="text-center text-4xl text-blue-600 font-bold sm:mb-8 lg:mb-12 mt-12 uppercase font-PlayfairDisplay">
            <h1>Our Clients</h1>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              359: { slidesPerView: 1, spaceBetween: 10, navigation: true },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {clients.map((client, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center self-center pt-4 pb-16"
              >
                <motion.div
                  className="flex justify-center items-center self-center m-4 h-40 w-40 p-8 bg-white rounded-full shadow-lg"
                  variants={flipVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <img
                    src={client.src}
                    alt={client.alt}
                    className="max-h-full max-w-full"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
