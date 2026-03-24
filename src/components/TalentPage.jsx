import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import backIcon from "../assets/images/group.png";
const TalentPage = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const defaultVideo =
    "https://videos.pexels.com/video-files/9006361/9006361-uhd_1440_2560_25fps.mp4";
  const [selectedVideo, setSelectedVideo] = useState(defaultVideo);

  const openFile = () => fileInputRef.current.click();

  const styles = {
    page: {
      minHeight: "100vh",
      width: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "16px",
    },

    topBar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },

    iconBtn: {
      background: "rgba(255,255,255,0.8)",
      border: "none",
      borderRadius: "10px",
      padding: "8px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 3px 8px rgba(0,0,0,0.3)",
    },

    centerBox: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      gap: "20px",
      marginBottom: "20px",
    },

    videoCard: {
      width: "90%",
      maxWidth: "350px",
      borderRadius: "20px",
      overflow: "hidden",
      background: "#f5e6c8",
      boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
    },

    videoElement: {
      width: "100%",
      borderRadius: "15px",
      backgroundColor: "#000",
    },

    uploadBtn: {
      marginTop: "15px",
      width: "80%",
      maxWidth: "250px",
      padding: "12px",
      borderRadius: "25px",
      border: "none",
      background: "#d9a441",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      textAlign: "center",
    },

    bottomBox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },

    submitBtn: {
      width: "85%",
      maxWidth: "260px",
      padding: "14px",
      borderRadius: "30px",
      border: "none",
      background: "#b87a1f",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
    },
  };

  return (
    <div style={styles.page}>
     
      <div style={styles.topBar}>
        <button style={styles.iconBtn} onClick={() => navigate(-1)}>
          <img src={backIcon} alt="back" className="w-6 h-6" />
        </button>

        <div style={{ display: "flex", gap: "10px" }}>
          <button style={styles.iconBtn} onClick={() => navigate("/dashboard")}>
            🏠
          </button>
          <button style={styles.iconBtn}>☰</button>
        </div>
      </div>

     
      <div style={styles.centerBox}>
        <div style={styles.videoCard}>
          <video
            src={selectedVideo}
            style={styles.videoElement}
            controls
          />

          <button style={styles.uploadBtn} onClick={openFile}>
            Upload Video
          </button>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="video/*"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setSelectedVideo(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>
      </div>

      <div style={styles.bottomBox}>
        <button style={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default TalentPage;