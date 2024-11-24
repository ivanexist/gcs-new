import { useContext } from "react";
import { GCSContext } from "../../context/GCSContext";
import RelatedProjectCard from "./RelatedProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const RelatedProjects = ({ selectedProject }) => {
  const { gcsData } = useContext(GCSContext);
  const filterRelatedProductCard =
    gcsData.Projects.filter(
      (project) =>
        project.service_id === selectedProject.service_id &&
        project.project_id !== selectedProject.project_id
    ) || [];

  return (
    <div className="my-24">
      <div className="flex justify-center items-center font-bold text-lg uppercase text-blue-600 ">
        {/* {console.log(filterRelatedProductCard.length)} */}
        {filterRelatedProductCard.length > 0 ? (
          <span className="border-b-2 border-b-atlantis-500 pb-2">
            Related Projects
          </span>
        ) : (
          ""
        )}
      </div>
      {/* filter category based on selected product card category, except selected book */}
      {/* <div className="grid sm:grid-cols-2 gap-4"> */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {filterRelatedProductCard.map((project) => (
          <SwiperSlide
            key={project.project_id}
            className="flex justify-center gap-8"
          >
            <RelatedProjectCard
              project={project}
              key={project.project_id}
              projectId={project.project_id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* </div> */}
    </div>
  );
};
export default RelatedProjects;
