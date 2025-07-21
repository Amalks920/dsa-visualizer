'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trash2 } from 'lucide-react';

interface ArrayVisualizerProps {
  elements: { el: any; index: number; id?: number }[];
  onDelete?: (index: number) => void;
}

const ArrayVisualizer = ({ elements, onDelete }: ArrayVisualizerProps) => {
  return (
    <div className="h-full flex justify-center items-center">
      {elements?.map(({ el, index, id }) => (
        <motion.div
          key={index}
          className="relative p-4 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 shadow-[0_0_24px_4px_rgba(255,0,255,0.4)] h-[80px] w-[80px] text-center pt-6 border-2 border-pink-400 rounded-2xl mx-3 transition-all duration-200 hover:shadow-[0_0_32px_8px_rgba(0,255,255,0.7)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          {/* Delete Icon */}
          {onDelete && (
            <button
              className="absolute top-2 right-2 text-white hover:text-pink-400 transition-colors drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]"
              onClick={() => onDelete(id ?? index)}
              type="button"
            >
              <Trash2 size={18} />
            </button>
          )}
          <span className="text-white font-extrabold text-2xl drop-shadow-[0_0_8px_rgba(0,255,255,0.7)]">{el}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default ArrayVisualizer;