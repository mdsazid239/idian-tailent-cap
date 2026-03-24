import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import music from "../assets/images/art-10.png";
import backIcon from "../assets/images/group.png";
const GoldenVoice = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const openFile = () => fileInputRef.current.click();
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "15px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "15px",
          right: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "rgba(255,255,255,0.2)",
            backdropFilter: "blur(6px)",
            border: "none",
            borderRadius: "50%",
            padding: "8px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={backIcon}
            alt="back"
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
          />
        </button>
        <div>
          <button
            onClick={() => navigate("/")}
            style={{
              marginRight: "6px",
              padding: "8px 10px",
              borderRadius: "8px",
              border: "none",
              background: "#ffffffcc",
              cursor: "pointer",
            }}
          >
            🏠
          </button>

          <button
            style={{
              padding: "8px 10px",
              borderRadius: "8px",
              border: "none",
              background: "#ffffffcc",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "380px",
          background: "#d8a75f",
          padding: "18px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
            GOLDEN VOICE
          </h2>

          <img
            src={music}
            alt="music"
            style={{ width: "40px", height: "40px" }}
          />
        </div>

        <p style={{ marginTop: "10px", fontWeight: "600" }}>
          Instruction
        </p>

        <ul
          style={{
            fontSize: "13px",
            lineHeight: "1.6",
            textAlign: "left",
            paddingLeft: "18px",
          }}
        >
          <li>Find a quiet place</li>
          <li>Keep face visible</li>
          <li>Record under 60 seconds</li>
          <li>File size ≤ 50 MB</li>
          <li>Format: MP4, MOV, AVI</li>
        </ul>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="video/*"
        />
        <button
          onClick={openFile}
          style={{
            marginTop: "15px",
            width: "100%",
            padding: "10px",
            background: "#6b3a06",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Upload from gallery
        </button>
      </div>
    </div>
  );
};

export default GoldenVoice;