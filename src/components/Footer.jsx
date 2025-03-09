// import { FaBookOpen } from "react-icons/fa";

const Footer = () => (
  <footer className="text-center text-gray-950  lg:text-left border-t border-t-blue-500 pb-8">
    {/* Main container div: holds the entire content of the footer, including four sections (TW ELements, Products, Useful, links, and COntact), with responsive styling and appropriate padding/margins */}
    <div className="mx-6 pt-10 text-center md:text-left">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* TW Elements Section */}
        <div className="text-lg">
          <h6 className="mb-4 flex items-center font-semibold uppercase justify-start text-blue-600">
            PT Gemilang Cipta Sentosa
          </h6>
          <p className="text-left text-masala-800 font-openSans">
            Perusahaan yang bergerak dalam bidang konstruksi Sipil Bangunan,
            Jetty/Dermaga, dan Pemasangan Instalasi Perpipaan.
          </p>
        </div>
        <div className="sm:hidden md:inline-block"></div>
        <div className="text-lg">
          <h6 className="mb-4 flex justify-start font-semibold uppercase text-blue-600">
            Business Hours
          </h6>
          <div className="flex flex-col justify-start text-masala-800 font-openSans">
            <p className="mb-2 text-left">Mon - Fri: 9 AM - 5 PM</p>
          </div>
        </div>
        {/* Contact Section */}
        <div className="text-lg">
          <h6 className="flex justify-start font-semibold mb-2 uppercase text-blue-600">
            Contact Us
          </h6>
          <div className="flex flex-col justify-start text-left font-openSans">
            <div className="flex my-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-7 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
              </span>
              <span className="text-masala-800">
                Jl. Pagesangan Agung Baru No.44, Surabaya
              </span>
            </div>
            <div className="flex my-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-7 w-6 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  ></path>
                </svg>
              </span>
              <span className="text-masala-800">
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
              <span className="text-masala-800">+ 62 31 8522710</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
