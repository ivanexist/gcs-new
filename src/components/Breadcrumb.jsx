import { useContext } from "react";
import { FaAngleRight, FaHome } from "react-icons/fa";
import { Link, useLocation, useParams } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { GCSContext } from "../context/GCSContext";
// import { useContext } from "react";
// import { BookHiveContext } from "../context/BookHiveContext";

const Breadcrumb = () => {
  // const { bookData } = useContext(BookHiveContext);
  // const { bookId } = useParams();
  // // console.log(bookId);
  // const selectedBook = bookData.find(
  //   (book) => book.book_id === parseInt(bookId, 10)
  // );
  // console.log(`bookId: ${bookId}`);
  // console.log(selectedBook);
  // if (!selectedBook) <div>Product Not Found</div>;
  const { gcsData } = useContext(GCSContext);
  const { projectId, serviceId } = useParams();

  const selectedService = gcsData.Services.find(
    (service) => service.service_id === parseInt(serviceId, 10)
  );
  const selectedProject = gcsData.Projects.find(
    (project) => project.project_id === parseInt(projectId, 10)
  );
  if (!selectedService) <div>Service Not Found</div>;
  if (!selectedProject) <div>Project Not Found</div>;

  const routes = [
    {
      path: "/",
      breadcrumb: "Home",
    },
    {
      path: "/about",
      breadcrumb: "About",
    },
    {
      path: "/services",
      breadcrumb: "Services",
    },
    {
      path: `/services/:${serviceId}`,
      breadcrumb: `${
        selectedService ? selectedService.service_name : "Service not found"
      }`,
    },
    {
      path: "/projects",
      breadcrumb: "Projects",
    },
    {
      path: `/projects/:${projectId}`,
      breadcrumb: `${
        selectedProject ? selectedProject.project_name : "Service not found"
      }`,
    },
    {
      path: "/contact",
      breadcrumb: "Contact",
    },
  ];

  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();

  return (
    <section className="">
      <div className=" mx-auto px-4 sm:py-16 lg:py-24 sm:px-6 justify-center sm:justify-center flex sm:h-16 lg:h-20 lg:px-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.5),rgba(255,255,255,0.7)),url('https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?q=80&w=1479&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
        <nav
          className="flex flex-col justify-center items-center max-w-screen-xl"
          aria-label="Breadcrumb"
        >
          {/* Title page based on Breadcrumb */}
          {breadcrumbs.slice(-1).map(({ match, breadcrumb }) => (
            <h1
              className="font-semibold sm:text-xl md:text-2xl lg:text-4xl mx-4  uppercase tracking-wider text-chathams-blue-900 bg-clip-text "
              key={match.url}
            >
              {breadcrumb}
            </h1>
          ))}
        </nav>
      </div>
      <div className="max-w-screen-xl sm:mx-4 md:mx-8 lg:mx-10  my-6">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse ">
          <li className="inline-flex items-center">
            {/* Place code dynamic breadcrumb here */}
            {breadcrumbs.map(({ match, breadcrumb }) => (
              <Link
                key={match.url}
                to={match.pathname}
                className={
                  match.pathname === location.pathname
                    ? "text-blue-600 inline-flex items-center sm:text-sm md:text-base font-semibold mr-1"
                    : "text-gray-500  inline-flex items-center sm:text-sm md:text-base font-medium hover:text-blue-600 mr-2"
                }
              >
                {breadcrumb.key === "/" ? (
                  <div className="flex">
                    <FaHome className="mt-1 mr-2" /> Home
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <FaAngleRight className="mr-2 mt-[4px]" />
                    {breadcrumb}
                  </div>
                )}
              </Link>
            ))}
          </li>
        </ol>
      </div>
    </section>
  );
};
export default Breadcrumb;
