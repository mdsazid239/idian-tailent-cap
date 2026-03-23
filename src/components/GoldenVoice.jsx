import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import music from "../assets/images/art-10.png" ;
const GoldenVoice = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const openFile = () => fileInputRef.current.click();
  return (
    <div style={styles.container(bg)}>
      
      {/* Top Icons */}
      <div style={styles.topBar}>
        <button style={styles.icon} onClick={() => navigate(-1)}>⟲</button>

        <div>
          <button style={styles.icon} onClick={() => navigate("/")}>🏠</button>
          <button style={styles.icon}>☰</button>
        </div>
      </div>

      {/* Card */}
      <div style={styles.card}>
        
        {/* Title + Music Image */}
        <div style={styles.header}>
          <h2 style={{ margin: 0 }}>GOLDEN VOICE</h2>

          {/* ✅ Music Image */}
          <img
            src={music}
            alt="music"
            style={styles.musicIcon}
          />
        </div>

        <p>Instruction</p>

        <ul style={styles.list}>
          <li>Find a quiet place</li>
          <li>Keep face visible</li>
          <li>Record under 60 seconds</li>
          <li>File size ≤ 50 MB</li>
          <li>Format: MP4, MOV, AVI</li>
        </ul>

        {/* Hidden input */}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
        />

        <button style={styles.uploadBtn} onClick={openFile}>
          Upload from gallery
        </button>
      </div>
    </div>
  );
};
export default GoldenVoice;
/* 🔥 Styles */
const styles = {
  container: (bg) => ({
    minHeight: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "20px",
  }),

  topBar: {
    position: "absolute",
    top: "15px",
    left: "15px",
    right: "15px",
    display: "flex",
    justifyContent: "space-between",
  },

  icon: {
    margin: "0 5px",
    padding: "8px 10px",
    borderRadius: "8px",
    border: "none",
    background: "#ffffffcc",
    cursor: "pointer",
  },

  card: {
    width: "100%",
    maxWidth: "400px",
    background: "#d8a75f",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  musicIcon: {
    width: "40px",   // adjust size
    height: "40px",
  },

  list: {
    fontSize: "13px",
    lineHeight: "1.6",
  },

  uploadBtn: {
    marginTop: "15px",
    width: "100%",
    padding: "10px",
    background: "#6b3a06",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};