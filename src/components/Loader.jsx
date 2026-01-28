import { motion } from "framer-motion";
import "../styles/loader.css";
export default function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <h1>Loading...</h1>
    </motion.div>
  );
}
