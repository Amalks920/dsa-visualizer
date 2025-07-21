import { motion } from "framer-motion";

const Header = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-8"
  >
    <h1 className="text-4xl font-extrabold text-pink-400 drop-shadow-[0_0_12px_rgba(255,0,255,0.8)] mb-2">Array Insertion Visualizer</h1>
    <p className="text-lime-300 font-bold drop-shadow-[0_0_8px_rgba(163,255,0,0.7)]">Watch elements animate into the array!</p>
  </motion.div>
);

export default Header; 