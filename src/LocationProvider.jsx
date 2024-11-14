import { AnimatePresence } from "framer-motion";

const LocationProvider = ({ children }) => (
  <AnimatePresence>{children}</AnimatePresence>
);
export default LocationProvider;
