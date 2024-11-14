import { useContext } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import ScrollUpButton from "../components/ScrollUpButton";
import ServicesContent from "../components/services/ServicesContent";
import { GCSContext } from "../context/GCSContext";
import Navbar2 from "../components/Navbar2";
import { motion } from "framer-motion";

const Services = () => {
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
        <ServicesContent />
        <Footer />
        <ScrollUpButton />
      </motion.div>
    </div>
  );
};
export default Services;
