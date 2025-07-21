"use client"
import Logo from "./Logo";
import ShareButton from "./ShareButton";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#1a003c] border-b-2 border-pink-500 shadow-[0_2px_24px_2px_rgba(255,0,255,0.2)] text-white h-[60px]">
      {/* Left: Logo as Home Link */}
      <Link href="/" className="flex items-center gap-2">
        <Logo />
      </Link>
      {/* Center: Navigation Links */}
      <div className="flex-1 flex justify-center gap-8">
        <Link href="/" className="hover:text-pink-400 text-lg font-extrabold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(255,0,255,0.7)] transition-colors">Home</Link>
        <Link href="/visualizer" className="hover:text-pink-400 text-lg font-extrabold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(0,255,255,0.7)] transition-colors">Visualizer</Link>
        <Link href="/about" className="hover:text-pink-400 text-lg font-extrabold tracking-widest uppercase drop-shadow-[0_0_8px_rgba(163,255,0,0.7)] transition-colors">About</Link>
      </div>
      {/* Right: User */}
      <div className="flex items-center gap-6">
        {/* Placeholder User Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center font-extrabold text-white text-lg shadow-[0_0_8px_2px_rgba(0,255,255,0.3)] border-2 border-pink-400 ml-2 tracking-widest uppercase">
          U
        </div>
      </div>
    </nav>
  );
}