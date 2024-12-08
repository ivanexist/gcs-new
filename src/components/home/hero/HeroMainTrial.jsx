import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const HeroMainTrial = () => {
  const slides = [
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Hilite-Rumah.jpg", //house
    },
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Gedung-Flat-T45-Marinir/Side-1.jpg", //gedung
    },
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pembangunan-Jalan/Proses-2-jalan.jpeg", //jalan
    },
    {
      image:
        "https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/images/Pipa-Pelindo-Energi-Logistik/Side-1.jpg", //pipa
    },
  ];
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mx-auto overflow-hidden">
      <div className="inset-y-0 top-0 right-0 z-0 w-full h-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block z-10"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                className="object-cover object-center w-full sm:h-64 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
                src={slide.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 sm:my-0 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans sm:text-2xl lg:text-3xl font-bold text-blue-600 sm:leading-none uppercase sm:text-center md:text-left">
            Komitmen untuk bersinergi sebaik mungkin
          </h2>
          <p className="pr-5 mb-5 text-base sm:text-justify lg:text-start text-gray-500 md:text-lg">
            Dengan sumber daya dan relasi yang luas, kami siap bersinergi
            menawarkan kerjasama yang produktif untuk mengahasilkan karya yang
            berkualitas.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroMainTrial;
