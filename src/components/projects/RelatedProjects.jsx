import { useContext } from "react";
import { GCSContext } from "../../context/GCSContext";
import RelatedProjectCard from "./RelatedProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import ProjectCard from "./ProjectCard";

const RelatedProjects = ({ selectedProject }) => {
  const { gcsData } = useContext(GCSContext);
  const filterRelatedProductCard =
    gcsData.Projects.filter(
      (project) =>
        project.service_id === selectedProject.service_id &&
        project.project_id !== selectedProject.project_id
    ) || [];

  return (
    <div className="my-20 max-w-full overflow-x-hidden">
      <div className="text-center font-bold text-lg uppercase text-blue-600">
        {/* {console.log(filterRelatedProductCard.length)} */}
        {filterRelatedProductCard.length > 0 ? (
          <h1 className="text-2xl mb-4">Related Projects</h1>
        ) : (
          ""
        )}
      </div>
      {/* filter category based on selected product card category, except selected book */}
      {/* <div className="grid sm:grid-cols-2 gap-4"> */}
      <div className="relative w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            359: { slidesPerView: 1, spaceBetween: 10, navigation: true },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{ overflow: "hidden", maxWidth: "100%" }}
          className="w-full"
        >
          {filterRelatedProductCard.map((project) => (
            <SwiperSlide
              key={project.project_id}
              className="flex justify-center items-center max-w-full"
            >
              <ProjectCard project={project} projectId={project.project_id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default RelatedProjects;
