// // import React from "react";
// // import { useNavigate } from "react-router-dom";
// // import bgImage from "../assets/images/panda.png";
// // import successImg from "../assets/images/art-12.png";
// // export default function ThankYouPage() {
// //   const navigate = useNavigate();
// //   return (
// //     <div
// //       className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative px-3 sm:px-4"
// //       style={{ backgroundImage: `url(${bgImage})` }}
// //     >
// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-black/30 z-0"></div>

// //       {/* Menu Button */}
// //       <button
// //         onClick={() => navigate("/")}
// //         className="fixed top-3 right-3 sm:top-4 sm:right-4 z-50 
// //         bg-white/20 backdrop-blur-md p-2 sm:p-3 
// //         rounded-lg shadow-lg hover:bg-white/30 transition"
// //       >
// //         ☰
// //       </button>

// //       {/* Card */}
// //       <div
// //         className="relative z-10 w-full max-w-sm sm:max-w-md 
// //         rounded-2xl border border-white/30 
// //         bg-white/10 backdrop-blur-xl shadow-2xl 
// //         p-5 sm:p-6 md:p-8 text-center"
// //       >
// //         {/* Image */}
// //         <img
// //           src={successImg}
// //           alt="success"
// //           className="mx-auto w-[100px] sm:w-[130px] md:w-[160px] 
// //           drop-shadow-lg"
// //         />

// //         {/* Title */}
// //         <h2 className="mt-3 text-base sm:text-lg md:text-xl 
// //         font-semibold text-[#3b2a0a] tracking-wide">
// //           THANK YOU!
// //         </h2>

// //         {/* Message */}
// //         <p className="mt-2 text-[11px] sm:text-xs md:text-sm 
// //         text-[#3b2a0a]/80 leading-relaxed">
// //           Your submission has been received successfully.
// //         </p>

// //         <p className="mt-1 text-[11px] sm:text-xs md:text-sm 
// //         text-[#3b2a0a]/80 leading-relaxed">
// //           You have added your shine to India's Golden Talent.
// //         </p>

// //         {/* Button */}
// //         <button
// //           onClick={() => navigate("/dashboard")}
// //           className="mt-5 px-5 sm:px-6 py-2 rounded-full 
// //           bg-[#5a3b0c] text-white text-sm sm:text-base
// //           hover:bg-[#7a4f16] transition-all duration-300 shadow-md"
// //         >
// //           Go Home
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import bgImage from "../assets/images/panda.png";
// import successImg from "../assets/images/art-12.png";

// export default function ThankYouPage() {
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Spinning Circular Chakra */}
//       <div
//         className="absolute z-10 rounded-full border-4 border-yellow-400/30"
//         style={{
//           width: "400px",
//           height: "400px",
//           animation: "spinCircle 6s linear infinite",
//         }}
//       ></div>

//       {/* Overlay to darken background for readability */}
//       <div className="absolute inset-0 bg-black/30 z-20"></div>

//       {/* Card */}
//       <div
//         className="relative z-30 w-full max-w-sm sm:max-w-md 
//         rounded-2xl border border-white/30 
//         bg-white/10 backdrop-blur-xl shadow-2xl 
//         p-5 sm:p-6 md:p-8 text-center"
//       >
//         <img
//           src={successImg}
//           alt="success"
//           className="mx-auto w-[100px] sm:w-[130px] md:w-[160px] drop-shadow-lg"
//         />
//         <h2 className="mt-3 text-base sm:text-lg md:text-xl font-semibold text-[#3b2a0c] tracking-wide">
//           THANK YOU!
//         </h2>
//         <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-[#3b2a0c]/80 leading-relaxed">
//           Your submission has been received successfully.
//         </p>
//         <p className="mt-1 text-[11px] sm:text-xs md:text-sm text-[#3b2a0c]/80 leading-relaxed">
//           You have added your shine to India's Golden Talent.
//         </p>
//         <button
//           onClick={() => navigate("/dashboard")}
//           className="mt-5 px-5 sm:px-6 py-2 rounded-full 
//           bg-[#5a3b0c] text-white text-sm sm:text-base
//           hover:bg-[#7a4f16] transition-all duration-300 shadow-md"
//         >
//           Go Home
//         </button>
//       </div>

//       {/* Keyframes for spinning circle */}
//       <style>{`
//         @keyframes spinCircle {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//       `}</style>
//     </div>
//   );
// }



// import React from "react";
// import bgImage from "../assets/images/bg.png"; // background
// import tickImg from "../assets/images/art-12.png"; // success tick

// export default function ThankYouPage() {
//   return (
//     <div
//       className="relative min-h-screen flex justify-center items-center overflow-hidden"
//       style={{
//         fontFamily: "'Inter', sans-serif",
//         maxWidth: "600px",
//       }}
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Rotating rays / Chakra effect */}
//       <div
//         className="absolute z-0 rounded-full"
//         style={{
//           top: "50%",
//           left: "50%",
//           width: "240%",
//           height: "200%",
//           transform: "translate(-50%, -50%)",
//           borderRadius: "50%",
//           background: "repeating-conic-gradient(rgba(235,195,98,0.5) 0deg 6deg, transparent 6deg 18deg)",
//           animation: "rotateRays 60s linear infinite",
//         }}
//       />

//       {/* Content */}
//       <div
//         className="relative z-10 flex flex-col items-center justify-center gap-3 w-full max-w-[420px] text-center px-5"
//       >
//         <h2
//           className="text-[#482100] font-bold text-[21.6px] leading-tight"
//         >
//           THANK YOU!
//         </h2>
//         <p
//           className="text-black text-[12px] font-medium leading-snug"
//         >
//           Your submission has been received successfully.
//         </p>
//         <p
//           className="text-black text-[12px] font-medium leading-snug"
//         >
//           You have added your shine to India's Golden Talent.
//         </p>

//         {/* Tick / success image with pop animation */}
//         <img
//           src={tickImg}
//           alt="success"
//           className="tick-pop mt-5"
//           style={{
//             height: "140px",
//             zIndex: 3,
//             filter: "drop-shadow(0 0 25px rgba(235,195,98,0.8))",
//           }}
//         />

//         {/* Button */}
//         <button
//           className="mt-5 rounded-xl bg-[#76400B] text-white font-medium shadow px-5 py-3"
//           style={{
//             width: "50%",
//             boxShadow: "0px 3px 0px #5a2f08, 0px 10px 14px rgba(0,0,0,0.3)",
//             transition: "all 0.15s ease",
//             cursor: "pointer",
//           }}
//           onClick={() => window.location.href = "/dashboard"} // Navigate home
//           onMouseDown={(e) => e.currentTarget.style.transform = "translateY(4px)"}
//           onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
//           onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0px)"}
//         >
//           Go Home
//         </button>
//       </div>

//       {/* Keyframes */}
//       <style>{`
//         @keyframes rotateRays {
//           from { transform: translate(-50%, -50%) rotate(0deg); }
//           to { transform: translate(-50%, -50%) rotate(360deg); }
//         }

//         @keyframes popPulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.18); }
//           100% { transform: scale(1); }
//         }

//         .tick-pop {
//           animation: popPulse 0.9s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// }




import React from "react";
import bgImage from "../assets/images/bg.png"; // background
import tickImg from "../assets/images/art-12.png"; // success tick
import backIcon from "../assets/images/group.png"; // back icon

export default function ThankYouPage() {
  return (
    <div
      className="relative min-h-screen flex justify-center items-center overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif", maxWidth: "600px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Rotating rays / Chakra effect */}
      <div
        className="absolute z-0 rounded-full"
        style={{
          top: "50%",
          left: "50%",
          width: "240%",
          height: "200%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "repeating-conic-gradient(rgba(235,195,98,0.5) 0deg 6deg, transparent 6deg 18deg)",
          animation: "rotateRays 60s linear infinite",
        }}
      />

      {/* Top Left Back Button */}
      <button
        className="absolute top-4 left-4 z-20"
        onClick={() => window.history.back()}
        style={{
          background: "rgba(255,255,255,0.7)",
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <img src={backIcon} alt="back" style={{ width: "28px" }} />
      </button>

      {/* Top Right Icons */}
      <div
        className="absolute top-4 right-4 z-20 flex flex-col items-center gap-2"
      >
        <button
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          🏠
        </button>
        <span style={{ fontSize: "12px", color: "#3b1d00", marginTop: "2px" }}>
          Home
        </span>

        <button
          style={{
            background: "rgba(255,255,255,0.7)",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          ☰
        </button>
        <span style={{ fontSize: "12px", color: "#3b1d00", marginTop: "2px" }}>
          Menu
        </span>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-3 w-full max-w-[420px] text-center px-5 mt-20"
      >
        <h2 className="text-[#482100] font-bold text-[21.6px] leading-tight">
          THANK YOU!
        </h2>
        <p className="text-black text-[12px] font-medium leading-snug">
          Your submission has been received successfully.
        </p>
        <p className="text-black text-[12px] font-medium leading-snug">
          You have added your shine to India's Golden Talent.
        </p>

        {/* Tick / success image with pop animation */}
        <img
          src={tickImg}
          alt="success"
          className="tick-pop mt-5"
          style={{
            height: "140px",
            zIndex: 3,
            filter: "drop-shadow(0 0 25px rgba(235,195,98,0.8))",
          }}
        />

        {/* Button */}
        <button
          className="mt-5 rounded-xl bg-[#76400B] text-white font-medium shadow px-5 py-3"
          style={{
            width: "50%",
            boxShadow: "0px 3px 0px #5a2f08, 0px 10px 14px rgba(0,0,0,0.3)",
            transition: "all 0.15s ease",
            cursor: "pointer",
          }}
          onClick={() => window.location.href = "/dashboard"} // Navigate home
          onMouseDown={(e) => (e.currentTarget.style.transform = "translateY(4px)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          Go Home
        </button>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes rotateRays {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes popPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }

        .tick-pop {
          animation: popPulse 0.9s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

