import React from "react";
import mainBg from "../assets/images/bg.png";
export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative px-4"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* ✅ Menu Button RIGHT SIDE */}
      <button
        className="fixed top-4 right-4 z-50 bg-white/20 backdrop-blur-md 
        p-2 rounded-lg shadow-lg hover:bg-white/30 transition"
      >
        ☰
      </button>

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/30 
        bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8 text-center"
      >
        {/* 404 Text */}
        <h1
          className="text-[60px] sm:text-[80px] md:text-[100px] font-extrabold 
          text-transparent bg-clip-text 
          bg-gradient-to-b from-yellow-300 to-yellow-600 drop-shadow-lg"
        >
          404
        </h1>

        <h2 className="mt-2 text-lg sm:text-xl font-semibold text-[#3b2a0a] tracking-wide">
          PAGE NOT FOUND
        </h2>

        <p className="mt-2 text-xs sm:text-sm text-[#3b2a0a]/80 leading-relaxed">
          The page you are looking for is busy finding Golden artist!
        </p>

        <button
          onClick={() => window.history.back()}
          className="mt-5 px-6 py-2 rounded-full bg-[#5a3b0c] text-white 
          hover:bg-[#7a4f16] transition-all duration-300 shadow-md"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}