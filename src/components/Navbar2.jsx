import { Link, useLocation, useParams } from "react-router-dom";

export default function Navbar2() {
  const location = useLocation();
  const { serviceId, projectId } = useParams();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <nav
      className={`sticky bg-wild-sand-50 bg-border-blue-100 transition-colors duration-300 ease-in-out z-20 py-4`}
    >
      <div className="max-w-screen-xl w-full flex items-center justify-between mx-auto py-2">
        <div className="flex">
          <div className="flex">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2"
            >
              <span className="self-center font-BrunoAce font-semibold whitespace-nowrap w-40 h-24">
                <img
                  src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/Logo-GCS.png"
                  alt="Logo Gemilang Cipta Sentosa"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="items-center justify-between sm:hidden sm:w-full mx-4 md:flex md:w-auto">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blumine-100 rounded-lg bg-blumine-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent ">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "font-bold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/about"
                    ? "font-bold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/services" ||
                  location.pathname === `/services/${serviceId}`
                    ? "font-bold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:p-0 ${
                  location.pathname === "/projects" ||
                  location.pathname === `/projects/${projectId}`
                    ? "font-bold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                {console.log(projectId)}
                {console.log(serviceId)}
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className={`py-2 px-4  rounded hover:text-blue-600  md:p-0 ${
                  location.pathname === "/contact"
                    ? "font-bold text-blue-600"
                    : "text-gray-400"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
