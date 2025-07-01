'use client';

import React, { useState } from 'react';
import { arrayCrudSections } from '@/data/courses';

export default function CourseList() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(prev => (prev === id ? null : id));
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-3">Your Courses</h3>
      <ul className="space-y-2">
        {arrayCrudSections.map((course) => (
          <li className='' key={course.id}>
            {/* Main Course Section */}
            <div
              onClick={() => toggleSection(course.id)}
              className="flex items-center justify-between px-3 py-2 rounded transition cursor-pointer text-sm h-[70px]
                text-black   border-b-[0.1px] border-gray-300"
            >
              <span>{course.name}</span>
              <span>{openSection === course.id ? '▲' : '▼'}</span>
            </div>

            {/* Subsections */}
            {openSection === course.id && (
              <ul className="ml-4 mt-2 space-y-1">
                {course.subSections.map((sub) => (
                  <li
                    key={sub.id}
                    className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600 text-sm cursor-pointer transition"
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
