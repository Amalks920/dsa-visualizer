'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const DummyComponent = () => {
  const [array, setArray] = useState([1,2,3,4,5])
  return (
    <div className="border-2 border-black h-full flex justify-center items-center">

{array.map((el,index)=>(
    <motion.div
       key={index}
      className="p-4 bg-green-200 rounded shadow h-[70px] w-[70px] text-center pt-6 border-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x:index===0?70:index===1? -70 :0 }}
      transition={{ duration: 1.5 }}
    >
     {el}
    </motion.div>
    ))}
    </div>
  );
};

export default DummyComponent;