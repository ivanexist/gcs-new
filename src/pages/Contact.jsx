import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";

const Contact = () => (
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
      <ContactForm />
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default Contact;
