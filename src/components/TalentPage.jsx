import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/images/bg.png";
import mansinger from "../assets/images/mansinger.png";
const TalentPage = () => {
  const navigate = useNavigate();

  const styles = {
    page: {
      height: "100vh",
      width: "100%",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px",
    },

    topBar: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    // 🔥 PREMIUM BUTTON STYLE
    glassBtn: {
      backdropFilter: "blur(10px)",
      background: "rgba(255,255,255,0.4)",
      border: "1px solid rgba(255,255,255,0.5)",
      padding: "10px",
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    rightIcons: {
      display: "flex",
      gap: "10px",
    },

    centerBox: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },

    card: {
      position: "relative",
      width: "92%",
      maxWidth: "320px",
      borderRadius: "22px",
      overflow: "hidden",
      background: "#f5e6c8",
      boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
    },

    img: {
      width: "100%",
      display: "block",
    },

    playBtn: {
      position: "absolute",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "65px",
      height: "65px",
      borderRadius: "50%",
      background: "linear-gradient(145deg, #d9a441, #b87a1f)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "22px",
      cursor: "pointer",
      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
    },

    cardActions: {
      position: "absolute",
      top: "10px",
      right: "10px",
      display: "flex",
      gap: "8px",
    },

    actionBtn: {
      backdropFilter: "blur(8px)",
      background: "rgba(255,255,255,0.6)",
      border: "none",
      padding: "6px",
      borderRadius: "50%",
      cursor: "pointer",
    },

    bottomBox: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "10px",
    },

    submitBtn: {
      width: "85%",
      maxWidth: "260px",
      padding: "14px",
      borderRadius: "30px",
      border: "none",
      background: "linear-gradient(145deg, #d9a441, #b87a1f)",
      color: "#fff",
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
    },
  };

  return (
    <div style={styles.page}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <button style={styles.glassBtn} onClick={() => navigate(-1)}>
          ⟲
        </button>

        <div style={styles.rightIcons}>
          <button style={styles.glassBtn} onClick={() => navigate("/dashboard")}>
            🏠
          </button>
          <button style={styles.glassBtn}>
            ☰
          </button>
        </div>
      </div>

      {/* Card */}
      <div style={styles.centerBox}>
        <div style={styles.card}>
          <img src={mansinger} alt="singer" style={styles.img} />

          <div style={styles.cardActions}>
            <button style={styles.actionBtn}>⬆</button>
            <button style={styles.actionBtn}>✖</button>
          </div>

          <div style={styles.playBtn}>▶</div>
        </div>
      </div>

      {/* Submit */}
      <div style={styles.bottomBox}>
        <button style={styles.submitBtn}>Submit</button>
      </div>
    </div>
  );
};

export default TalentPage;