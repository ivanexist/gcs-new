import AboutContent from "../components/about/AboutContent";
import AboutTestimonial from "../components/about/AboutTestimonial";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import MemberGroup from "../components/home/MemberGroup";
import Testimonial from "../components/home/Testimonial";
import Navbar2 from "../components/Navbar2";
import ScrollUpButton from "../components/ScrollUpButton";
import { motion } from "framer-motion";

const About = () => (
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
      <AboutContent />
      {/* <div>About Page</div> */}
      <Testimonial />
      <MemberGroup />
      <Footer />
      <ScrollUpButton />
    </motion.div>
  </div>
);
export default About;
