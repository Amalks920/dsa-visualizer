'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";


const DummyComponent = ({array}:{array:any}) => {
  //const [array, setArray] = useState([1])
  return (
    <div className=" h-full flex justify-center items-center">
{array?.map(({el,index}:{el:any,index:any})=>(
    <motion.div
       key={index}
      className="p-4 bg-black  shadow h-[70px] w-[70px] text-center  pt-6 border-1 rounded-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x:index===0?70:index===1? -70 :0 }}
      transition={{ duration: 1.5 }}
    >
    <span className=" text-white">{el}</span> 
    </motion.div>
    ))}
    </div>
  );
};

export default DummyComponent;