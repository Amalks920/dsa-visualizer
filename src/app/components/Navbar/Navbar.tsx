"use client"
import { useState } from "react";
import Logo from "./Logo";
import Progress from "./Progress";
import ShareButton from "./ShareButton";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Navbar() {
      let [isOpen, setIsOpen] = useState(false);
    
      function open() {
        setIsOpen(true);
      }
    
      function close() {
        setIsOpen(false);
      }

    return (
    <>
      <nav className="flex items-center justify-between p-4 bg-[#1c1d1f] text-white h-[50px]">
        <Logo />
        <div className="border-white flex">
        <h1 className="text-white">progress</h1>
        <div
            onMouseEnter={open}
            onMouseLeave={close}
            className="relative "
          >
        <Progress />
        </div>
        <ShareButton />
        </div>
      </nav>

      </>
    );
  }