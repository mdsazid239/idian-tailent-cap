import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import person from "../assets/images/art-13.png";
import backIcon from "../assets/images/group.png";
export default function ReferralPage() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("GOLD123");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="absolute inset-0 bg-black/10" />

     
      <button
        onClick={() => navigate(-1)}
        className="fixed top-3 left-3 z-50 
        bg-white/30 backdrop-blur-md 
        p-2 rounded-full shadow-lg"
      >
        <img
          src={backIcon}
          alt="back"
          className="w-5 h-5 object-contain"
        />
      </button>

     
      <div className="fixed top-3 right-3 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center 
          rounded-lg bg-white/20 text-white shadow"
        >
          ☰
        </button>
      </div>

      
      {menuOpen && (
        <div className="fixed top-14 right-3 z-50 bg-white rounded-xl shadow-lg p-3 w-40 text-black">
          <p className="py-1 cursor-pointer">Profile</p>
          <p className="py-1 cursor-pointer">Settings</p>
        </div>
      )}

      
      <div className="flex items-center justify-center min-h-screen px-4">
        <img
          src={person}
          alt="person"
          className="w-52 sm:w-64 md:w-72 object-contain"
        />
      </div>

     
      <div className="fixed bottom-4 left-0 w-full px-4 flex justify-center z-40">
        <div className="w-full max-w-md rounded-3xl bg-[#9c6b2f]/80 backdrop-blur-md shadow-xl p-5 text-center text-white">
          
          <h2 className="text-base sm:text-lg font-bold">
            Get more Chances to Win!
          </h2>

          <p className="text-xs sm:text-sm text-white/80 mt-1">
            Share your referral code with friends & earn vouchers!
          </p>

          <p className="mt-3 text-xs sm:text-sm">Your Referral Code:</p>

          <div className="text-lg sm:text-xl font-bold text-yellow-300 mt-1 tracking-widest">
            GOLD123
          </div>

          <button
            onClick={copyCode}
            className="mt-4 w-full py-2 sm:py-3 rounded-full bg-yellow-400 text-black font-semibold shadow active:scale-95"
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
}