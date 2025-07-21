'use client';

import React, { useState } from 'react';
import { arrayCrudSections } from '@/data/courses';

export default function CourseList() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      <h3 className="text-xs font-bold text-lime-300 mb-3 tracking-widest drop-shadow-[0_0_8px_rgba(163,255,0,0.7)] uppercase">Your Courses</h3>
      <ul className="space-y-2 w-full">
        {arrayCrudSections.map((course) => (
          <li className='w-full' key={course.id}>
            {/* Main Course Section */}
            <div
              onClick={() => toggleSection(course.id)}
              className="flex items-center justify-between px-3 py-2 rounded-xl transition cursor-pointer text-sm h-[60px] bg-[#2d006b] text-lime-300 border-2 border-pink-500 shadow-[0_0_8px_2px_rgba(255,0,255,0.2)] hover:bg-pink-500 hover:text-white hover:shadow-[0_0_16px_4px_rgba(255,0,255,0.4)] w-full"
            >
              <span className="font-extrabold tracking-wide">{course.name}</span>
              <span className="text-pink-300">{openSection === course.id ? '▲' : '▼'}</span>
            </div>

            {/* Subsections */}
            {openSection === course.id && (
              <ul className="ml-4 mt-2 space-y-1 w-full">
                {course.subSections.map((sub) => (
                  <li
                    key={sub.id}
                    className="px-3 py-1 rounded-lg bg-[#1a003c] text-cyan-300 hover:bg-cyan-400 hover:text-black text-xs cursor-pointer transition font-bold tracking-wide shadow-[0_0_8px_2px_rgba(0,255,255,0.2)] w-full"
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
