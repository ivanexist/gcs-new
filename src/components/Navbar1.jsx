// components/Navbar.tsx

import { useEffect, useState } from "react";
// import "./Navbar1.css";

export default function Navbar1() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      scrollTop > 50 ? setIsScrolled(true) : setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky bg-gray-200 w-full z-10 top-0 shadow-md ${
        isScrolled ? "hidden" : "block"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-2">
        <div className=" flex items-center justify-between h-12">
          <div>
            <div className="flex">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 my-2"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14 22V8c0-2.828 0-4.243-.879-5.121C12.243 2 10.828 2 8 2s-4.243 0-5.121.879C2 3.757 2 5.172 2 8v8c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22zM6.5 11h-1m5 0h-1m-3-4h-1m1 8h-1m5-8h-1m1 8h-1m9 0h-1m1-4h-1m.5-3h-4v14h4c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8"
                    color="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="text-xs py-2 pl-2">
                Jl. Pagesangan Agung No. 44, Surabaya
                <span className="px-1">|</span>
              </div>
              <div className="text-xs py-2 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 mr-1"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    color="currentColor"
                  >
                    <path d="M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2h1.5c3.771 0 5.657 0 6.828 1.172S21.5 6.229 21.5 10v4c0 3.771 0 5.657-1.172 6.828S17.271 22 13.5 22H12c-3.771 0-5.657 0-6.828-1.172S4 17.771 4 14z"></path>
                    <path d="M9.8 11.974c-.427-.744-.633-1.351-.757-1.967c-.184-.91.237-1.8.933-2.368c.295-.24.632-.158.806.155l.393.705c.311.558.467.838.436 1.134c-.03.296-.24.537-.66 1.02zm0 0a10.36 10.36 0 0 0 3.726 3.726m0 0c.744.427 1.351.633 1.967.757c.91.184 1.8-.237 2.368-.933c.24-.295.158-.632-.155-.806l-.704-.393c-.56-.311-.839-.467-1.135-.436c-.296.03-.537.24-1.02.66zM5 6H2.5M5 12H2.5M5 18H2.5"></path>
                  </g>
                </svg>
                +62 31-82522710<span className="px-1">|</span>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 my-2 mr-1"
                >
                  <g fill="currentColor">
                    <path d="M9 7h2v5h5v2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0"
                      clipRule="evenodd"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="text-xs py-2">Mon-Sat: 8am - 6pm </div>
            </div>
          </div>
          <div>
            <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex justify-end">
                  <span className="text-xs py-1">Follow us: </span>
                  {/* Facebook */}
                  <a href="#" className="mr-4 text-blumine-800 py-1 pl-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      q
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a href="#" className="mr-4 text-blumine-800 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z"
                      />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="mr-4 text-blumine-800 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="mr-4 text-blumine-800 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
