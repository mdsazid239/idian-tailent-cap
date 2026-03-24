import React from "react";
import bgImage from "../assets/images/bg.png"; 
import tickImg from "../assets/images/art-12.png"; 

export default function ThankYouPage() {
  return (
    <div
      className="relative min-h-screen flex justify-center items-center overflow-hidden"
      style={{
        fontFamily: "'Inter', sans-serif",
        maxWidth: "600px",
      }}
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

     
      <div
        className="absolute z-0 rounded-full"
        style={{
          top: "50%",
          left: "50%",
          width: "240%",
          height: "200%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "repeating-conic-gradient(rgba(235,195,98,0.5) 0deg 6deg, transparent 6deg 18deg)",
          animation: "rotateRays 60s linear infinite",
        }}
      />

      
      <div
        className="relative z-10 flex flex-col items-center justify-center gap-3 w-full max-w-[420px] text-center px-5"
      >
        <h2
          className="text-[#482100] font-bold text-[21.6px] leading-tight"
        >
          THANK YOU!
        </h2>
        <p
          className="text-black text-[12px] font-medium leading-snug"
        >
          Your submission has been received successfully.
        </p>
        <p
          className="text-black text-[12px] font-medium leading-snug"
        >
          You have added your shine to India's Golden Talent.
        </p>

        
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

     
        <button
          className="mt-5 rounded-xl bg-[#76400B] text-white font-medium shadow px-5 py-3"
          style={{
            width: "50%",
            boxShadow: "0px 3px 0px #5a2f08, 0px 10px 14px rgba(0,0,0,0.3)",
            transition: "all 0.15s ease",
            cursor: "pointer",
          }}
          onClick={() => window.location.href = "/dashboard"} // Navigate home
          onMouseDown={(e) => e.currentTarget.style.transform = "translateY(4px)"}
          onMouseUp={(e) => e.currentTarget.style.transform = "translateY(0px)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0px)"}
        >
          Go Home
        </button>
      </div>

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


