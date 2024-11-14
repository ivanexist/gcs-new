import { useContext, useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import GridProjects from "../components/projects/GridProjects";
import ScrollUpButton from "../components/ScrollUpButton";
import { GCSContext } from "../context/GCSContext";
import FilterNavbar from "../components/filterandsort/FilterNavbar";
import Navbar2 from "../components/Navbar2";
import { motion } from "framer-motion";

const Projects = () => {
  const { gcsData, scrollToTop } = useContext(GCSContext);

  const [list, setList] = useState(false);
  const projectsPerPageOptions = [15, 30, 45];
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(
    projectsPerPageOptions[0]
  );
  const [totalPages, setTotalPages] = useState(0);
  const [currentProjects, setCurrentProjects] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [sortingMethod, setSortingMethod] = useState("");
  const [sortedProjects, setSortedProjects] = useState([]);

  console.log(gcsData);
  useEffect(() => {
    let updatedGcsData = [{ ...gcsData }];
    // console.log(updatedGcsData);

    // sorting gcsData
    switch (sortingMethod) {
      case "newest":
        "";
        break;
      case "oldest":
        "";
        break;
      default:
        break;
    }

    // filtered by category
    const filterProductByServices = (gcs) => {
      // Show all nodes when category is not selected
      // Check if any selected category match with the products
      const serviceMatch = selectedServices.some((service) =>
        gcs.Services.includes(service)
      );
      return serviceMatch;
    };

    // Filter base on project year completed
    // const yearCompleted = gcs.Projects.year_completed >=

    // apply filtering
    const filteredProjects = updatedGcsData.filter(filterProductByServices);

    setTotalPages(Math.ceil(filteredProjects.length / projectsPerPage));
    setSortedProjects(filteredProjects);

    // apply pagination to the filtered projects
    const startIndex = currentPage * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    // Filtering projects by using dynamic react-paginate
    setCurrentProjects(filteredProjects.slice(startIndex, endIndex));
    console.log(updatedGcsData);
  }, [selectedServices, currentPage, projectsPerPage, sortingMethod]);

  // Handke page changing
  const handlePageChanging = ({ selected }) => {
    setCurrentPage(selected);
    scrollToTop();
  };

  // Handle items per page
  const handleProjectsPerPageChange = (e) => {
    const newProjectsPerPage = parseInt(e.target.value, 10);
    setProjectsPerPage(newProjectsPerPage);
    // Reset to the first page when changing projects per page
    setCurrentPage(0);
  };

  // handle sorting change
  const handleSelectSortingChange = (selectedSortingValue) =>
    setSortingMethod(selectedSortingValue);
  return (
    <div>
      <div className="sticky top-0 z-20">
        <Navbar2 />
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Breadcrumb />
        {/* <main className="mx-auto max-w-screen-xl">
        <FilterNavbar
          onList={list}
          onSetList={setList}
          onSelectSortingChange={handleSelectSortingChange}
          onProjectsPerPageOptions={projectsPerPageOptions}
          onHandleProjectsPerPageChange={handleProjectsPerPageChange}
          onProjectsPerPage={projectsPerPage}
          // onCurrentProjects={currentProjects}
          onSelectedServices={selectedServices}
        />
      </main> */}
        <GridProjects
          currentProjects={currentProjects}
          totalPages={totalPages}
          currentPage={currentPage}
          onHandlePageChange={handlePageChanging}
        />
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  );
};
export default Projects;
