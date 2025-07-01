import React from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
//  import { TrophyIcon } from "@heroicons/react/24/solid";

export default function Progress({ progress = 60, size = 96 }) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <>
    <Popover className={'pt-1.5'}>
    <PopoverButton className={'max-h-[79px]'}>
    <div
      className=" flex items-center justify-center group h-fit hover:cursor-pointer "
      style={{ width: size, height: size }}
      aria-label={`Progress: ${progress}%`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >

      <svg width={size} height={size} className="transform -rotate-90 ">
        {/* Background circle */}
        <circle
          stroke="#1f2937" // gray-800
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.5s ease" }}
        />
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" /> {/* Purple */}
            <stop offset="100%" stopColor="#ec4899" /> {/* Pink */}
          </linearGradient>
        </defs>
      </svg>    
      {/* Center Trophy Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/60 backdrop-blur-md p-2 rounded-full shadow-lg shadow-purple-500/30">
          {/* <TrophyIcon className="w-fit h-fit text-purple-400 group-hover:scale-110 transition-transform duration-200" /> */}
        </div>
      </div>

    </div>
    </PopoverButton>   
          <PopoverPanel
            transition
            anchor="bottom"
            className="-mt-5 -ms-3 divide-y divide-white/5 rounded-xl bg-white text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
          >
            {/* <div className=" relative bottom-3 border-2 w-0 h-0 border-t-8 border-b-8 border-l-0 border-r-[20px] border-t-transparent border-b-transparent border-r-blue-500"></div> */}
            <div className="p-3">
              <a className="block rounded-lg px-3 py-2 transition hover:bg-green-600/5" href="#">
                <p className="font-semibold text-white">Progress</p>
                <p className="text-white/50">Measure actions your users take</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
    </>
  );
}

