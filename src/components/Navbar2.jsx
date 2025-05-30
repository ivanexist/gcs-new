import { Link, useLocation, useParams } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import { useEffect, useState } from "react";

export default function Navbar2() {
  const location = useLocation();
  const { serviceId, projectId } = useParams();
  const [isSticky, setIsSticky] = useState(false);
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setIsSticky(true);
      return;
    }
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // Navbar becomes sticky after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <nav
      className={`${
        isHomePage ? "fixed" : "sticky"
      } transition-all top-0 w-full duration-300 ease-in-out z-20 py-4 ${
        isSticky ? "bg-wild-sand-50 shadow-sm py-4" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl w-full flex items-center justify-between mx-auto py-2">
        <div className="flex">
          <div className="flex">
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center space-x-3 rtl:space-x-reverse mx-2 sm:w-24 sm:h-12 md:w-40 md:h-24"
            >
              <span className="self-center font-semibold whitespace-nowrap">
                <img
                  src="https://raw.githubusercontent.com/ivanexist/gcs-new/refs/heads/master/public/Logo-GCS.png"
                  alt="Logo Gemilang Cipta Sentosa"
                />
              </span>
            </Link>
          </div>
        </div>
        <div className="items-center justify-between sm:hidden sm:w-full mx-4 md:flex md:w-auto md:text-lg">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-blumine-100 rounded-lg bg-blumine-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent ">
            <li>
              <Link
                to="/"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:hover:bg-transparent md:p-0 ${
                  location.pathname === "/"
                    ? "font-bold text-blue-600"
                    : isSticky
                    ? "text-gray-400"
                    : "text-white"
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
                    : isSticky
                    ? "text-gray-400"
                    : "text-white"
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
                    : isSticky
                    ? "text-gray-400"
                    : "text-white"
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
                    : isSticky
                    ? "text-gray-400"
                    : "text-white"
                }`}
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className={`py-2 px-4 rounded hover:text-blue-600 md:p-0 ${
                  location.pathname === "/contact"
                    ? "font-bold text-blue-600"
                    : isSticky
                    ? "text-gray-400"
                    : "text-white"
                }`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <NavbarMobile />
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full p-[1px] bg-gradient-to-r from-blue-600 to-atlantis-400"></div> */}
    </nav>
  );
}
