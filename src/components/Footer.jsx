// import { FaBookOpen } from "react-icons/fa";

const Footer = () => (
  // <section className="flex items-center bg-white">
  //   <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6 my-10"></div>
  <footer className="text-center text-gray-950  lg:text-left">
    {/* Main container div: holds the entire content of the footer, including four sections (TW ELements, Products, Useful, links, and COntact), with responsive styling and appropriate padding/margins */}
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* TW Elements Section */}
        <div>
          <h6 className="mb-4 flex items-center font-semibold uppercase justify-start text-blue-600">
            PT Gemilang Cipta Sentosa
          </h6>
          <p className="text-left text-gray-500">
            Perusahaan yang bergerak dalam bidang konstruksi Sipil Bangunan,
            Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan.
          </p>
        </div>
        <div className="sm:hidden md:inline-block"></div>
        <div>
          <h6 className="mb-4 flex justify-start font-semibold uppercase text-blue-600">
            Business Hours
          </h6>
          <div className="flex flex-col justify-start text-gray-500">
            <p className="mb-2 text-left">Mon - Fri: 9 AM - 5 PM</p>
          </div>
        </div>
        {/* Contact Section */}
        <div>
          <h6 className="flex justify-start font-semibold mb-2 uppercase text-blue-600">
            Contact Us
          </h6>
          <div className="flex flex-col justify-start ">
            <div className="flex my-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-4 h-5 w-5 text-blue-600"
                >
                  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>
              </span>
              <span className="text-gray-500">
                Jl. Pagesangan Agung Baru No.44, Surabaya
              </span>
            </div>
            <div className="flex my-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-4 h-5 w-5 text-blue-600"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </span>
              <span className="text-gray-500">
                gemilangciptasentosa@gmail.com
              </span>
            </div>
            <div className="flex my-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-4 h-5 w-5 text-blue-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-gray-500">+ 62 31 8522710</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 border-blue-200 p-6 my-4 lg:justify-between">
        <div className="mr-12 hidden lg:block"></div>
        {/* Social Network icons container */}
      </div>
    </div>
  </footer>
);

export default Footer;
