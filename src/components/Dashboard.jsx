import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo4.png";
import sing from "../assets/images/art-10.png";
import art from "../assets/images/art-08.png";
import camera from "../assets/images/art-09.png";
import mic from "../assets/images/art-11.png";

const categories = [
  { img: sing, title: "SINGING" },
  { img: art, title: "PERFORMING ART" },
  { img: camera, title: "PHOTOGRAPHY" },
  { img: mic, title: "STANDUP COMEDY" },
];

const videos = [
  "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg",
  "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg",
  "https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 py-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Top Bar */}
      <div className="relative flex justify-center items-center mb-6">
        
        {/* LOGO CLICK → Dashboard */}
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/")}
          className="w-36 cursor-pointer"
        />

        <div className="absolute right-0 top-0 flex gap-2">
          
          {/* HOME BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="bg-white/70 p-2 rounded-md"
          >
            🏠
          </button>

          {/* MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white/70 p-2 rounded-md"
          >
            ☰
          </button>
        </div>

        {/* DROPDOWN */}
        {menuOpen && (
          <div className="absolute right-0 top-12 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-xl p-4 shadow-lg w-48">
            <p
              onClick={() => navigate("/profile")}
              className="py-2 cursor-pointer hover:underline"
            >
              My Profile
            </p>

            <p
              onClick={() => navigate("/terms")}
              className="py-2 cursor-pointer hover:underline"
            >
              Terms & Conditions
            </p>
          </div>
        )}
      </div>

      {/* Category */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {categories.map((item, index) => (
          <div key={index} className="text-center">
            <div className="bg-[#e6c28b]/80 rounded-xl shadow-lg p-4">
              <img
                src={item.img}
                className="w-full h-24 object-contain"
              />
            </div>
            <p className="text-white text-sm font-semibold mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      {/* TOP PERFORMERS */}
      <h2 className="text-center text-white font-bold mt-10 mb-4">
        TOP PERFORMERS
      </h2>

      <div className="flex justify-center items-center gap-4">

        {/* LEFT */}
        <button
          onClick={() =>
            setCurrentVideo(
              currentVideo === 0 ? videos.length - 1 : currentVideo - 1
            )
          }
          className="text-white text-2xl"
        >
          ⬅
        </button>

        {/* VIDEO */}
        <div className="relative w-60 h-40 rounded-xl overflow-hidden shadow-xl">
          <img
            src={videos[currentVideo]}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/80 rounded-full p-3 cursor-pointer">
              ▶
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() =>
            setCurrentVideo(
              currentVideo === videos.length - 1 ? 0 : currentVideo + 1
            )
          }
          className="text-white text-2xl"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default Dashboard;