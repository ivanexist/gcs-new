import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";

const Error = () => (
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
      {/* <Breadcrumb /> */}
      <div className="flex h-[calc(100vh-80px)] items-center justify-center p-5 bg-inherit w-full">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-yellow-100 p-4">
            <div className="rounded-full stroke-yellow-600 bg-yellow-200 p-4">
              <svg
                className="w-16 h-16"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 9.33337V14M14.0002 18.6667H14.0118M25.6668 14C25.6668 20.4434 20.4435 25.6667 14.0002 25.6667C7.55684 25.6667 2.3335 20.4434 2.3335 14C2.3335 7.55672 7.55684 2.33337 14.0002 2.33337C20.4435 2.33337 25.6668 7.55672 25.6668 14Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <h1 className="mt-5 text-[36px] font-bold text-slate-800 lg:text-[50px]">
            404 - Page not found
          </h1>
          <p className="text-slate-600 mt-5 lg:text-lg">
            The page you are looking for doesn't exist or <br />
            has been removed.
          </p>
          <div>
            <button className="px-8 py-4 mt-8 hover:bg-atlantis-600 bg-atlantis-500 text-white rounded-xl">
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default Error;
