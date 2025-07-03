'use client'
import Sidebar from "./components/Sidebar/SideBar";
import DummyComponent from "./components/DummyComponent";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    <div className="w-[80vw]  p-4 pb-0">
        <div className="h-[700px] ">row1
          <DummyComponent />
        </div>
        <div className="h-fit min-h-[500px]">row2
        </div>
    </div>
    <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="w-[20vw] bg-white/10 backdrop-blur-lg border-l border-white/20 p-6 overflow-y-auto"
     //className="w-[20vw]"
     >
      <Sidebar/>
    </motion.div>
  </div>
  );
}
