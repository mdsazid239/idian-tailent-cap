import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import logo from "../assets/images/logo4.png";
import sing from "../assets/images/art-10.png";
import art from "../assets/images/art-08.png";
import camera from "../assets/images/art-09.png";
import mic from "../assets/images/art-11.png";
import video1 from "../assets/images/dance1.mp4";
import video2 from "../assets/images/dance2.mp4";
import video3 from "../assets/images/dance3.mp4";
import backIcon from "../assets/images/group.png";

const categories = [
  { img: sing, title: "SINGING" },
  { img: art, title: "PERFORMING ART" },
  { img: camera, title: "PHOTOGRAPHY" },
  { img: mic, title: "STANDUP COMEDY" },
];
const videos = [video1, video2, video3];
const Dashboard = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  return (
    <div
      className="min-h-screen bg-cover bg-center px-3 sm:px-4 py-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <button
        onClick={() => navigate(-1)}
        className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50 
        bg-white/20 backdrop-blur-md 
        p-2 rounded-full shadow-lg 
        hover:bg-white/30 transition"
      >
        <img
          src={backIcon}
          alt="back"
          className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
        />
      </button>

      <div className="relative flex justify-center items-center mb-6">
        <img
          src={logo}
          alt="logo"
          onClick={() => navigate("/dashboard")}
          className="w-28 sm:w-32 cursor-pointer"
        />

        <div className="absolute right-0 top-0 flex gap-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-white/70 p-2 rounded-md"
          >
            🏠
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-white/70 p-2 rounded-md"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="absolute right-0 top-12 bg-yellow-300 rounded-xl p-3 shadow-lg w-40 text-center">
            <p onClick={() => navigate("/profile")} className="py-2 cursor-pointer hover:underline">
              My Profile
            </p>
            <p onClick={() => navigate("/terms")} className="py-2 cursor-pointer hover:underline">
              Terms
            </p>
          </div>
        )}
      </div>

      
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate("/golden-voice")}
            className="text-center cursor-pointer"
          >
            <div className="bg-[#e6c28b]/80 rounded-xl shadow p-3 hover:scale-105 transition">
              <img src={item.img} alt={item.title} className="w-full h-20 object-contain" />
            </div>
            <p className="text-white text-xs sm:text-sm font-semibold mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </div>

     
      <h2 className="text-center text-white font-bold mt-8 mb-4">
        TOP PERFORMERS
      </h2>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() =>
            setCurrentVideo(
              currentVideo === 0 ? videos.length - 1 : currentVideo - 1
            )
          }
          className="text-white text-xl"
        >
          ⬅
        </button>

        <div className="w-52 sm:w-60 h-32 sm:h-40 rounded-xl overflow-hidden shadow-lg">
          <video
            src={videos[currentVideo]}
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <button
          onClick={() =>
            setCurrentVideo(
              currentVideo === videos.length - 1 ? 0 : currentVideo + 1
            )
          }
          className="text-white text-xl"
        >
          ➡
        </button>
      </div>
    </div>
  );
};
export default Dashboard;