import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import ScrollUpButton from "../components/ScrollUpButton";
import BestServices from "../components/home/BestServices";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Features from "../components/home/Features";
import Testimonial from "../components/home/Testimonial";
import WelcomeToGCS from "../components/home/WelcomeToGCS";
import HeroMain from "../components/home/hero/HeroMain";
import { motion } from "framer-motion";
import HeroMain2 from "../components/home/hero/HeroMain2";
import HeroMainTrial from "../components/home/hero/HeroMainTrial";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <div className="relative top-0 z-20">
        <Navbar2 />
      </div>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 0, opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <main className="relative w-full">
          <HeroMain />
          <div className="max-w-screen-xl mx-auto text-center">
            <Features />
            <WelcomeToGCS />
            <BestServices />
            <FeaturedProjects />
          </div>
          <Testimonial />
          <Footer />
          <ScrollUpButton />
        </main>
      </motion.div>
    </div>
  );
}
