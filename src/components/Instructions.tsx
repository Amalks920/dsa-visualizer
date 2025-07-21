import { motion } from "framer-motion";

const Instructions = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
    className="mt-8 text-center text-lime-300 font-bold drop-shadow-[0_0_8px_rgba(163,255,0,0.7)]"
  >
    <p className="mb-2">💡 <strong>Tips:</strong></p>
    <p className="text-sm">
      • Leave index empty to add at the end • Click elements to remove them • Press Enter to add quickly
    </p>
  </motion.div>
);

export default Instructions; 