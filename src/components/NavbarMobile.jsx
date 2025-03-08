import Hamburger from "hamburger-react";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";
import { GCSContext } from "../context/GCSContext";

const routesMobile = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Projects", link: "/projects" },
  { title: "Contact", link: "/contact" },
];

const NavbarMobile = () => {
  const { scrollToTop } = useContext(GCSContext);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} color="#249fd3" size={24} />
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed z-80 left-0 shadow-4xl right-0 top-24 p-6 pt-0 bg-white border-b border-b-white/20"
        >
          <ul className="grid gap-2 my-2">
            {routesMobile.map((route, idx) => {
              return (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                  className="w-full p-[0.08rem]  "
                >
                  <Link
                    onClick={() => {
                      setOpen((prev) => !prev);
                      scrollToTop();
                    }}
                    className={
                      "flex items-center justify-between w-full p-5 bg-blue-100"
                    }
                    to={route.link}
                  >
                    <span className="flex gap-1 text-lg text-blue-600 font-semibold">
                      {route.title}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
export default NavbarMobile;
