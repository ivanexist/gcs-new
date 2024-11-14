import { useContext } from "react";
import Category from "../filterandsort/Category";
import ProjectCard from "./ProjectCard";
import { GCSContext } from "../../context/GCSContext";
import Index1 from "../../json/Index";
// import { useContext } from "react";

const GridProjects = ({
  currentProjects,
  totalPages,
  currentPage,
  onHandlePageChange,
}) => {
  const { gcsData } = useContext(GCSContext);

  return (
    <div className="mx-auto max-w-2xl lg:max-w-7xl mb-24">
      <div className="grid grid-cols-4 gap-x-8 gap-y-10 lg:grid-cols-4">
        {/* Filters */}
        {/* <div className="col-span-1">
          <Category />
        </div> */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 gap-x-1 gap-y-8 sm:grid-cols-3 xl:gap-x-4">
            {/* {console.log(gcsData.Projects)} */}
            {
              // gcsData.Projects.length > 0 ? (
              gcsData.Projects.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.project_id}
                  projectId={project.project_id}
                />
              ))
              // ) : (
              //   <div className="grid col-span-5 h-screen place-content-center bg-white px-4">
              //     <h1 className="uppercase tracking-widest font-bold text-4xl text-blumine-900">
              //       Product Not Found
              //     </h1>
              //   </div>
              // )
            }
          </div>
        </div>
      </div>
      {/* <motion.div
        variants={paginationVariants}
        initial="hidden"
        animate="visible"
      >
        {totalPages > 1 && (
          <ReactPaginate
            // onClick={handleClickToTop}
            pageCount={totalPages}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={onHandlePageChange}
            containerClassName="flex items-center justify-center mt-12 mb-4 text-gray-600"
            activeClassName="bg-blumine-500 text-white"
            nextLabel={
              showNextButton ? (
                <button className="w-10 h-10 flex justify-center items-center hover:bg-blumine-500  text-blumine-500 hover:text-white mr-4 cursor-pointer">
                  <FaAngleRight className="w-6 h-8 " />
                </button>
              ) : null
            }
            previousLabel={
              showPrevButton ? (
                <button className="w-10 h-10 flex justify-center items-center hover:bg-blumine-500 text-blumine-500 hover:text-white mr-4 cursor-pointer">
                  <FaAngleLeft className="w-6 h-8 " />
                </button>
              ) : null
            }
            breakLabel={<span className="mr-4 text-gray-600s">...</span>}
            pageClassName="block hover:border hover:border-solid hover:border-blumine-200 hover:bg-blumine-500 w-10 h-10 flex justify-center items-center hover:text-white cursor-pointer mx-1"
          />
        )}
      </motion.div> */}
      <Index1 />
    </div>
  );
};
export default GridProjects;
