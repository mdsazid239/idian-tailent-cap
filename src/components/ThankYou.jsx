import React, { useState, useRef, useEffect } from "react";
import bgImage from "../assets/images/bg.png";
import tickImg from "../assets/images/art-12.png";
import hamburger from "../assets/images/hamburger.png";

export default function RulesPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="container">

      <div className="bg" style={{ backgroundImage: `url(${bgImage})` }} />

      <div className="chakra" />

      {/* Menu */}
      <div className="top-icons">
        <div
          className="icon-btn"
          ref={btnRef}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src={hamburger} alt="menu" />
        </div>
      </div>

      {menuOpen && (
        <div className="nav-menu" ref={menuRef}>
          <a href="/profile">My profile</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
        </div>
      )}

      {/* Tick Center */}
      <img src={tickImg} alt="tick" className="tick" />

      {/* Content */}
      <div className="content">
        <h2>Thanks for participating !</h2>

        <p>
         You have added your shine to India’s Golden Talent.
         Winners announcing soon - Stay tuned!
        </p>
        <p>
          Your <b>UBER voucher</b> will be
         sent to your registered mobile number shortly.
        </p>
        <button onClick={() => (window.location.href = "/reference-code")}>
          Get Reference Code
        </button>
      </div>

      <style>{`
        .container {
          position: relative;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: -2;
        }

        .chakra {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 180vmax;
          height: 180vmax;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: repeating-conic-gradient(
            rgba(235,195,98,0.5) 0deg 6deg,
            transparent 6deg 18deg
          );
          animation: spin 60s linear infinite;
          z-index: -1;
        }

        .top-icons {
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .icon-btn img {
          width: 26px;
        }

        .nav-menu {
          position: absolute;
          top: 60px;
          right: 20px;
          width: 200px;
          background: rgba(255,215,150,0.9);
          border-radius: 10px;
          padding: 10px 0;
        }

        .nav-menu a {
          display: block;
          padding: 10px;
          color: #3b1d00;
          text-decoration: none;
        }

        /* ✅ Tick Perfect Center */
        .tick {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          transform: translate(-50%, -50%);
          animation: pop 1s infinite;
          z-index: 2;
        }

        /* Content below tick */
        .content {
          position: relative;
          z-index: 3;
          text-align: center;
          margin-top: calc(50vh + 80px);
          padding: 20px;
        }

        h2 {
       color: #482100;
       font-weight: 700; /* bold */
        }
        p {
          font-size: 12px;
          margin-top: 10px;
        }

        button {
          margin-top: 20px;
          padding: 10px 20px;
          border-radius: 12px;
          background: #76400B;
          color: white;
          border: none;
        }

        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes pop {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.15); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
      `}</style>
    </div>
  );
}